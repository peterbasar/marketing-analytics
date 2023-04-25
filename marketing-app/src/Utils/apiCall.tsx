import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";


interface apiCallInterface {
    method: "POST" | "GET" | "PUT" | "DELETE",
    url: string,
    params?: Object,
    headers?: AxiosRequestConfig["headers"],
    throwErr?: boolean,
}

const apiCall = async ({method, url, params, headers, throwErr}: apiCallInterface): Promise<AxiosResponse<any, any> | null> => {
    try {
        switch(method) {
            case "POST":
                return await axios.post(url, {params: params, headers: headers})
            case "GET":
                return await axios.get(url, {params: params, headers: headers})
            case "PUT":
                return await axios.put(url, {params: params, headers: headers})
            case "DELETE":
                return await axios.delete(url, {params: params, headers: headers})
            default:
                return null
        }
    } catch (error) {
        console.log(error)
        if (throwErr && throwErr === true){
            if (error instanceof AxiosError){
                throw error
            }
        }
    }
    return null
}
export default apiCall