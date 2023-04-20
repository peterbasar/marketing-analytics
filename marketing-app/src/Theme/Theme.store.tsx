export interface ThemeHexColorInterface {
    primary: string,
    secondary: string,
    tertiary: string,
    text: string,
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
    text: RgbValuesInterface,
}

interface GradientsInterface {
    primary: string,
}

export interface ThemeDataInterface {
    hex: ThemeHexColorInterface,
    rgb: ThemeRgbColorInterface,
    gradient: GradientsInterface,
}


export const DefaultTheme: ThemeDataInterface = {
    hex: {
        primary: "#D9D9D9",
        secondary: "#FFFFFF",
        tertiary: "#88C6FF",
        text: "#000000"
    },
    rgb: {
        primary: {r: 217, g: 217, b: 217},
        secondary: {r: 255, g: 255, b: 255},
        tertiary: {r: 136, g: 198, b: 255},
        text: {r: 0, g: 0, b: 0},
    },
    gradient: {
        primary: "linear-gradient(315deg, rgba(217,217,217,1) 0%, rgba(255,255,255,1) 100%)",
    }
}