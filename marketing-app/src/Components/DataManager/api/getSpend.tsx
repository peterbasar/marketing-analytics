import apiCall from "Utils/apiCall"
import { getSpendUrl } from "Components/DataManager/api/urlBuilder"
import { spendInterface } from "Components/DataManager/DataManager.interfaces"
import { offlineDataMode } from "config"


interface getSpendInterface {
    xApiKey: string,
    partitionId: string,
    fromDate?: string, /* YYYY-MM-DD */
    toDate?: string, /* YYYY-MM-DD */
    optimisationTarget?: "conversions" | "revenue",
}

const getSpend = async ({
        xApiKey,
        partitionId,
        fromDate,
        toDate,
        optimisationTarget,
}: getSpendInterface): Promise<spendInterface | null> => {
    if (offlineDataMode === true){
        const data: spendInterface = require('Components/DataManager/data/getSpend.json')
        return data
    }

    let response = await apiCall({
        method: "GET",
        url: getSpendUrl(partitionId),
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
export default getSpend
