import React, { useEffect } from "react"
import { DefaultTheme, ThemeDataInterface } from "./Theme.store";


interface ThemeInterface {
    children: React.ReactNode,
}

/* Create default theme context */
export const ThemeContext = React.createContext<ThemeDataInterface>(DefaultTheme);


const Theme = ({children}: ThemeInterface) => {
    /* Set theme CSS accessible variables */
    useEffect(() => {
        /* Hex */
        const hexVariables = Object.keys(DefaultTheme.hex);
        for (let i=0; i < hexVariables.length; i++) { // @ts-ignore
            document.documentElement.style.setProperty(`--hex-${hexVariables[i]}`, DefaultTheme.hex[hexVariables[i] as string]);
        }
        /* Gradient */
        const gradientVariables = Object.keys(DefaultTheme.gradient);
        for (let i=0; i < gradientVariables.length; i++) { // @ts-ignore
            document.documentElement.style.setProperty(`--gradient-${gradientVariables[i]}`, DefaultTheme.gradient[gradientVariables[i] as string]);
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