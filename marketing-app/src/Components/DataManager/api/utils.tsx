export interface getApiDateParamInterface {
    year: number,
    month: number,
    day: number,
}

export const getApiDateParam = ({year, month, day}: getApiDateParamInterface): string => {
    /* Return formatted time */
    return `${year}-${month}-${day}`
}