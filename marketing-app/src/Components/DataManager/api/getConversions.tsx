import apiCall from "Utils/apiCall"
import { getConversionsUrl } from "Components/DataManager/api/urlBuilder"
import { revenueInterface } from "Components/DataManager/DataManager.interfaces"


interface getConversionsInterface {
    xApiKey: string,
    partitionId: string,
    fromDate?: string, /* YYYY-MM-DD */
    toDate?: string, /* YYYY-MM-DD */
    optimisationTarget?: "conversions" | "revenue",
}

const getConversions = async ({
        xApiKey,
        partitionId,
        fromDate,
        toDate,
        optimisationTarget,
}: getConversionsInterface): Promise<revenueInterface | null> => {

    let response = await apiCall({
        method: "GET",
        url: getConversionsUrl(partitionId),
        params: {
            from_date: fromDate,
            to_date: toDate,
            optimisation_target: optimisationTarget,
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
export default getConversions