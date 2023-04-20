export interface ThemeHexColorInterface {
    primary: string,
    secondary: string,
    tertiary: string,
}
interface RgbValuesInterface {
    r: number,
    g: number,
    b: number,
}
interface ThemeRgbColorInterface {
    primary: RgbValuesInterface,
    secondary: RgbValuesInterface,
    tertiary: RgbValuesInterface,
}


export interface ThemeDataInterface {
    hex: ThemeHexColorInterface,
    rgb: ThemeRgbColorInterface,
}


export const DefaultTheme: ThemeDataInterface = {
    hex: {
        primary: "#D9D9D9",
        secondary: "#FFFFFF",
        tertiary: "#88C6FF",
    },
    rgb: {
        primary: {r: 217, g: 217, b: 217},
        secondary: {r: 255, g: 255, b: 255},
        tertiary: {r: 136, g: 198, b: 255},
    }
}