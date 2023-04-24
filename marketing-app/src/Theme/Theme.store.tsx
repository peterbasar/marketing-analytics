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
        primary: "#FFFFFF",
        secondary: "#000000",
        tertiary: "#ACADAA",
        text: "#000000"
    },
    rgb: {
        primary: {r: 255, g: 255, b: 255},
        secondary: {r: 0, g: 0, b: 0},
        tertiary: {r: 172, g: 173, b: 170},
        text: {r: 0, g: 0, b: 0},
    },
    gradient: {
        primary: "linear-gradient(315deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)",
    }
}