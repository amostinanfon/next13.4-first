import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from "next-auth/react";



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

    },

    async signIn({profile}){

    }
})


export { handler as Get , handler as POST}