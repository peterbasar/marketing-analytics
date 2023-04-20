import React, { useEffect } from "react"
import apiCall from "Utils/apiCall"

interface DataManagerInterface {
    children: React.ReactNode
}

const DataManager = ({children}: DataManagerInterface) => {
    useEffect(() => {
        console.log("Hello World!")
        apiCall({method: "GET", url: "https://jsonplaceholder.typicode.com/posts/1"}).then(
            (response) => {console.log(response)}
        )
    })

    return <>{children}</>
}
export default DataManager;