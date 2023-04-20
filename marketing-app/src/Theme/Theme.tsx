import React, { useEffect } from "react"
import { DefaultTheme, ThemeDataInterface } from "./Theme.store";


interface ThemeInterface {
    children: React.ReactNode,
}

/* Create default theme context */
export const ThemeContext = React.createContext<ThemeDataInterface>(DefaultTheme);


const Theme = ({children}: ThemeInterface) => {
    /* Set theme CSS accessible variables */
    const variables = Object.keys(DefaultTheme.hex);
    useEffect(() => {
        for (let i=0; i < variables.length; i++) {
            // @ts-ignore
            document.documentElement.style.setProperty(`--${variables[i]}`, DefaultTheme.hex[variables[i] as string]);
        } 
    })

    /* Provide theme context */
    return  (
        <ThemeContext.Provider value={DefaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
}
export default Theme;