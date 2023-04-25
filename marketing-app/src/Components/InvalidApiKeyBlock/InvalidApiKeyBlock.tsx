import React from "react"
import { useTranslation } from "react-i18next"
/* Components */
import Container from "Components/Container/Container"
import UnhideOnViewportWrapper from "Animations/UnhideOnViewportWrapper"
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store"


interface InvalidApiKeyBlockInterface {
    children: React.ReactNode
}


const InvalidApiKeyBlock = ({children}: InvalidApiKeyBlockInterface) => {
    const { t } = useTranslation()
    const partitions = useDataManagerStore((state) => state.partitions)    

    return (
        partitions.length == 0
        ? (
            <Container style={{height: "100vh"}} flexGrow={100} >
                <UnhideOnViewportWrapper>
                    <div>{t("set_valid_api_key_first")}</div>
                </UnhideOnViewportWrapper>
            </Container>
        )
        : (<>{children}</>)
    )
}
export default InvalidApiKeyBlock