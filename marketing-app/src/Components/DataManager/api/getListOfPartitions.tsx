import apiCall from "Utils/apiCall"
import { getListOfPartitionsUrl } from "Components/DataManager/api/urlBuilder"
import { paritionInterface } from "Components/DataManager/DataManager.interfaces"
import { offlineDataMode } from "config"


interface getListOfPartitionsInterface {
    xApiKey: string,
    offset?: number,
    limit?: number,
}

const getListOfPartitions = async ({xApiKey, offset, limit}: getListOfPartitionsInterface): Promise<Array<paritionInterface> | null> => {
    if (offlineDataMode === true){
        const data: Array<paritionInterface> = require('Components/DataManager/data/listAvailablePartitions.json')
        return data
    }

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