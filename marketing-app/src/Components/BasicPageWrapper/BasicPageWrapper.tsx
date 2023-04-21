import React from "react"
import "Components/BasicPageWrapper/BasicPageWrapper.css"
/* Components */
import Container from "Components/Container/Container"
import Sidebar from "Components/Sidebar/Sidebar"


interface BasicPageWrapperInterface {
    children: React.ReactNode
}

const BasicPageWrapper = ({children}: BasicPageWrapperInterface) => {
    return (
        <Container wrap="nowrap" justifyContent="start">
            <Sidebar />
            <div style={{minHeight: "100vh"}}>
                <Container flexGrow={100}>
                    {children}
                </Container>
            </div>
        </Container>
    )
}
export default BasicPageWrapper
