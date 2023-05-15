import '@/styles/globals.css';


export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}


const layout = ({children}) => {
  return (
    <html>
        <body lang='en '>
            <div className="gradient"/>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout