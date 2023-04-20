import apiCall from "Utils/apiCall"
import { getPerformanceReportUrl } from "Components/DataManager/api/urlBuilder"
import { performanceReportItemInterface } from "Components/DataManager/DataManager.interfaces"


interface getPerformanceReportInterface {
    xApiKey: string,
    partitionId: string,
    fromDate?: string, /* YYYY-MM-DD */
    toDate?: string, /* YYYY-MM-DD */
    optimisationTarget?: "conversions" | "revenue",
}

const getPerformanceReport = async ({
        xApiKey,
        partitionId,
        fromDate,
        toDate,
        optimisationTarget,
}: getPerformanceReportInterface): Promise<Array<performanceReportItemInterface> | null> => {

    let response = await apiCall({
        method: "GET",
        url: getPerformanceReportUrl(partitionId),
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
export default getPerformanceReport
