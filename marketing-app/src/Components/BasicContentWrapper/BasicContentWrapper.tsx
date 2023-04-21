import React from "react"
import "Components/BasicContentWrapper/BasicContentWrapper.css"
/* Components */
import Container from "Components/Container/Container"


interface BasicContentWrapperInterface {
    children: React.ReactNode,
    heading?: string,
}

const BasicContentWrapper = ({children, heading}: BasicContentWrapperInterface) => {
    let contentGap: string = "40px";

    return (
        <Container 
            alignContent="start"
            flexGrow={100}
            justifyContent="start"
            style={{minHeight: "100vh"}}
        >
            <Container  wrap="nowrap" flexDirection="column" alignItems="start" flexGrow={100}
                        style={{margin: "0", padding: contentGap}}
            >
                { heading
                    ? (<h1 style={{margin: `0 0 ${contentGap} 0`}}>{heading}</h1>)
                    : (<></>)
                }
                {children} 
            </Container>
        </Container>
    )
}
export default BasicContentWrapper
