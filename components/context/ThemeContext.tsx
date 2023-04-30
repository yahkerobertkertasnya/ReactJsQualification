import { createContext } from "react";


export const THEME = {
    light : {
        bars : "bg-primary",
        background : "bg-white",
        text : "text-black"
    },
    dark : {
        bars : "bg-black",
        background : "bg-dark",
        text : "text-white"
    }
}

export const ThemeContext = createContext(THEME.light);