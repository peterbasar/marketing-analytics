import React, { useState } from "react"
import "Pages/ApiKeyPage/ApiKeyPage.css"
import { useNavigate } from "react-router-dom";
/* Constants */
import { FRONTEND_ENDPOINTS } from "config"
/* Components */
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";
import Container from "Components/Container/Container";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store"
/* i18n */
import { useTranslation } from "react-i18next";


const ApiKeyPage = () => {
    /* i18n */
    const { t } = useTranslation()
    
    const apiKey = useDataManagerStore((state) => state.apiKey);
    const setApiKey = useDataManagerStore((state) => state.setApiKey);

    /* Handle input */
    const [input, setInput] = useState(apiKey);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    /* Handle click */
    const navigate = useNavigate();
    const handleClick = () => {
        setApiKey(input);
        navigate(FRONTEND_ENDPOINTS.PARTITION);
    }

    return (
        <BasicPageWrapper>
            <Container style={{minHeight: "100vh"}}>
                <div className="api-key-page-input-wrapper">
                    <p>{t("enter_your_api_key")}</p>
                    <input value={input} onChange={handleInputChange}></input>
                    <button onClick={() => {handleClick()}}>{t("continue")}</button>
                </div>
            </Container>
        </BasicPageWrapper>            
    )
}
export default ApiKeyPage