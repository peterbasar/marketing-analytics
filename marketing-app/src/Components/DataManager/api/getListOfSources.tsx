import apiCall from "Utils/apiCall"
import { getListOfSourcesUrl } from "Components/DataManager/api/urlBuilder"


interface getListOfSourcesInterface {
    xApiKey: string,
    partitionId: string,
    fromDate?: string, /* YYYY-MM-DD */
    toDate?: string, /* YYYY-MM-DD */
}

const getListOfSources = async ({xApiKey, partitionId, fromDate, toDate}: getListOfSourcesInterface): Promise<Array<string> | null> => {
    let response = await apiCall({
        method: "GET",
        url: getListOfSourcesUrl(partitionId),
        params: {
            from_date: fromDate,
            to_date: toDate,
        },
        headers: {
            "x-api-key": xApiKey,
        }
    })

    if (response !== null && response.status === 200 ){
        return response.data
    }else{
        return null
    }
}
export default getListOfSources