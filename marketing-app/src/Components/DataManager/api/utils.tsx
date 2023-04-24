export interface getApiDateParamInterface {
    year: number,
    month: number,
    day: number,
}

export const getApiDateParam = ({year, month, day}: getApiDateParamInterface): string => {
    /* Return date in a format that is used in api request */
    return `${year}-${month}-${day}`
}
