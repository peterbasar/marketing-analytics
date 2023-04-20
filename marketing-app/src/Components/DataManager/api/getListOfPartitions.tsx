import apiCall from "Utils/apiCall"
import { getListOfPartitionsUrl } from "Components/DataManager/api/urlBuilder"
import { partitionDataItemInterface } from "Components/DataManager/DataManager.interfaces"


interface getListOfPartitionsInterface {
    xApiKey: string,
    offset?: number,
    limit?: number,
}

const getListOfPartitions = async ({xApiKey, offset, limit}: getListOfPartitionsInterface): Promise<Array<partitionDataItemInterface> | null> => {
    let response = await apiCall({
        method: "GET",
        url: getListOfPartitionsUrl(),
        params: {
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
export default getListOfPartitions