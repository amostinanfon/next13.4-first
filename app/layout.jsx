import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';


export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}


const Rootlayout = ({children}) => {
  return (
    <html>
       
        <body lang='en '>
            <Provider>
                <div className="gradient"/>
        
                <main className="app">
                    <Nav/>
                        {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout;