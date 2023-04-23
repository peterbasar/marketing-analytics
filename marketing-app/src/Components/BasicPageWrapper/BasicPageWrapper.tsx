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
        <Container wrap="nowrap" justifyContent="start" alignItems="flex-start">
            <Sidebar />
            <Container flexGrow={100}>
                {children}
            </Container>
        </Container>
    )
}
export default BasicPageWrapper
