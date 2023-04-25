import React from "react"
/* Components */
import Container from "Components/Container/Container"
import UnhideOnViewportWrapper from "Animations/UnhideOnViewportWrapper"
/* Zustand */
import { useAppStore } from "App.store"


interface BasicContentWrapperInterface {
    children: React.ReactNode,
    heading?: string,
}

const BasicContentWrapper = ({children, heading}: BasicContentWrapperInterface) => {
    /* Zustand */
    const windowBreakId = useAppStore((state) => state.windowBreakId)

    let contentGap: string = (windowBreakId === "default" || windowBreakId === "sm") ? "10px" : "40px"

    return (
        <Container 
            alignContent="flex-start"
            flexGrow={100}
            justifyContent="start"
            style={{minHeight: "100vh"}}
        >
            <Container  wrap="nowrap" flexDirection="column" alignItems="stretch" flexGrow={100}
                        style={{margin: "0", padding: contentGap}}
            >
                { heading
                    ? (
                        <UnhideOnViewportWrapper>
                            <h1 style={{padding: `30px 30px`, margin: `0 0 ${contentGap} 0`, wordWrap: "break-word", backgroundColor: "var(--hex-secondary)", color: "var(--hex-primary)"}}>
                                {heading}
                            </h1>
                        </UnhideOnViewportWrapper>
                    )
                    : (<></>)
                }
                <UnhideOnViewportWrapper>
                    {children} 
                </UnhideOnViewportWrapper>
            </Container>
        </Container>
    )
}
export default BasicContentWrapper
