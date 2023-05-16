import React, { useState } from "react";
import { Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import Container from "Components/Container/Container";
import UnhideOnViewportWrapper from "Animations/UnhideOnViewportWrapper";


const PageInfoAlert = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <div style={{
            position: "fixed",
            zIndex: "25", 
            top: "0",
            margin: "25px",
            overflowY: "auto",
        }}>
            {
                isOpen
                ? (
                    <UnhideOnViewportWrapper>
                        <Alert
                            severity="info"
                            onClose={() => {setIsOpen(false)}}
                        >
                            {t("page_in_offline_mode")}
                        </Alert>
                    </UnhideOnViewportWrapper>
                )
                : (<></>)
            }
        </div>
    )
}
export default PageInfoAlert