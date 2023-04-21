import React, { useState } from "react"
import "Pages/ApiKeyPage/ApiKeyPage.css"
import { useNavigate } from "react-router-dom";
/* Constants */
import { FRONTEND_ENDPOINTS } from "config"
/* Components */
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store"


const ApiKeyPage = () => {
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
            <div className="api-key-page-input-wrapper">
                <p>Enter your API key</p>
                <input value={input} onChange={handleInputChange}></input>
                <button onClick={() => {handleClick()}}>Continue</button>
            </div>
        </BasicPageWrapper>            
    )
}
export default ApiKeyPage