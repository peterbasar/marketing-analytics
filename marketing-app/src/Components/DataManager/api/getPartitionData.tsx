import apiCall from "Utils/apiCall"
import { getPartitionDataUrl } from "Components/DataManager/api/urlBuilder"
import { partitionDataItemInterface } from "Components/DataManager/DataManager.interfaces"


interface getPartitionDataInterface {
    xApiKey: string,
    partitionId: string,
    fromDate?: string, /* YYYY-MM-DD */
    toDate?: string, /* YYYY-MM-DD */
    optimisationTarget?: "conversions" | "revenue",
    source?: string,
    offset?: number,
    limit?: number,
}

const getPartitionData = async ({
        xApiKey,
        partitionId,
        fromDate,
        toDate,
        optimisationTarget,
        source,
        offset,
        limit
}: getPartitionDataInterface): Promise<Array<partitionDataItemInterface> | null> => {

    let response = await apiCall({
        method: "GET",
        url: getPartitionDataUrl(partitionId),
        params: {
            from_date: fromDate,
            to_date: toDate,
            optimisation_target: optimisationTarget,
            source: source,
            offset: offset,
            limit: limit,
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
export default getPartitionData