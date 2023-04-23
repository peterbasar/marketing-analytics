export enum FRONTEND_ENDPOINTS {
    APIKEY = "/", 
    PARTITION = "/partition",
    DASHBOARD = "/dashboard",
}

export const BACKEND_ENDPOINTS = {
    API: "https://demo-api.adtriba.app/v1/api/partitions/"
}


/* Managing responsive layout */
export interface RESPONSIVE_BREAKS_INTERFACE {
    lg: number,
    md: number,
    sm: number,
    default: 0,
}
const RESPONSIVE_BREAKS: RESPONSIVE_BREAKS_INTERFACE = {
    /* Has to be ordered in decreasing order */
    lg: 1200,
    md: 992,
    sm: 768,
    default: 0,
}
export const getBreakId = (width: number): keyof RESPONSIVE_BREAKS_INTERFACE => {
    /* Return key of the current active break */

    /* Iterate all the breaks and if the current break higher, we return it */
    const breakKeys = Object.keys(RESPONSIVE_BREAKS)
    for (let i = 0; i < breakKeys.length; i++){
        if (width >= RESPONSIVE_BREAKS[breakKeys[i] as keyof RESPONSIVE_BREAKS_INTERFACE]){
            return breakKeys[i] as keyof RESPONSIVE_BREAKS_INTERFACE
        }
    }

    return "default"
}