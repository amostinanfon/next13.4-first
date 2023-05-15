import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from "next-auth/react";
import User from "@/models/user";


console.log({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
})



const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
    },

    async signIn({profile}){
        try {
            await connectToDB();
            
            //if user exists
            const userExists = await User.findOne({
                email: profile.email
            });

            // if user doesn't exists , create one
            if (!userExists){
                await
                 User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowercase(),
                    image: profile.picture
                 })
            }

        } catch (error) {
            console.log(error);
        }
    }
})


export { handler as Get , handler as POST}