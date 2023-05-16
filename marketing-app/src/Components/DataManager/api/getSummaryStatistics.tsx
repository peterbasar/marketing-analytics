import apiCall from "Utils/apiCall"
import { getSummaryStatisticsUrl } from "Components/DataManager/api/urlBuilder"
import { summaryStatisticsInterface } from "Components/DataManager/DataManager.interfaces"
import { offlineDataMode } from "config"


interface getSummaryStatisticsInterface {
    xApiKey: string,
    partitionId: string,
    fromDate?: string, /* YYYY-MM-DD */
    toDate?: string, /* YYYY-MM-DD */
    optimisationTarget?: "conversions" | "revenue",
}

const getSummaryStatistics = async ({
        xApiKey,
        partitionId,
        fromDate,
        toDate,
        optimisationTarget,
}: getSummaryStatisticsInterface): Promise<summaryStatisticsInterface | null> => {
    if (offlineDataMode === true){
        const data: summaryStatisticsInterface = require('Components/DataManager/data/getSummaryStatistics.json')
        return data
    }

    let response = await apiCall({
        method: "GET",
        url: getSummaryStatisticsUrl(partitionId),
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
export default getSummaryStatistics
