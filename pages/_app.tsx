import { ApolloProvider } from "@apollo/client";
import Bottombar from "../components/BottomBar/BottomBar";
import Navbar from "../components/Navbar/Navbar-bar";
import 'bootstrap/dist/css/bootstrap.css'
import QueryProvider, { client } from "../components/context/QueryResultContext";
import { THEME, ThemeContext } from "../components/context/ThemeContext";
import { useContext, useState } from "react";



export default function App({ Component, pageProps } : any) : JSX.Element {
    const [theme, setTheme] = useState(() => {
        return useContext(ThemeContext);
    });

    const themeHandler = () => {
        if(theme === THEME.light) {
            setTheme(THEME.dark);
        }
        else {
            setTheme(THEME.light);
        }
    }


    
    return (
        <div>
            <ApolloProvider client={client}>
                <QueryProvider>
                    <ThemeContext.Provider value={theme}>
                        <>
                            <Navbar themeHandler={themeHandler}/>
                            <main className={`h-100 d-flex flex-column min-vh-100 ${theme.background} ${theme.text}`}>
                                <Component {...pageProps}></Component> 
                            </main>
                            <Bottombar />
                        </>
                    </ThemeContext.Provider>
                </QueryProvider>
            </ApolloProvider>
        </div> 
    );
}