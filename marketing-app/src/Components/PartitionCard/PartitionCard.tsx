import React from "react"
import "Components/PartitionCard/PartitionCard.css"
/* Components */
import Card from "Components/Card/Card"
/* MUI */
import Tooltip from '@mui/material/Tooltip';
/* i18n */
import { useTranslation } from "react-i18next"


interface PartitionCardInterface {
    brand: string,
    country: string,
    id: string,
    selected: boolean,
    onClick?: () => void,
}

const PartitionCard = ({brand, country, id, selected, onClick}: PartitionCardInterface) => {
    /* i18n */
    const { t } = useTranslation()

    const keyValue = (key: string, value: string) => {
        return (
            <div style={{
                    width: "inherit",
                    display: "flex",
                    marginBottom: "5px",
                    color: "var(--hex-secondary)"}}>
                
                    <p style={{margin: "0"}}><b>{key}:&nbsp;</b></p>
                    <Tooltip title={`${key}: ${value}`}>
                        <p style={{margin: "0", overflow: "hidden", textOverflow: "ellipsis",}}>
                            {value}
                        </p>
                    </Tooltip>
            </div> 
        )
    }

    return (
        <Card   width="200px" padding="20px"
                style={{
                    border: `1px solid var(--hex-secondary)`,
                }}
        >
            {/* Brand */}
            {keyValue(t("brand"), brand)}
            {/* Id */}
            {keyValue(t("id"), id)}
            {/* Country */}
            {keyValue(t("country"), country)}
            
            <button className="partition-card-select-button" onClick={() => {onClick && onClick()}}>
                {t("select")}
            </button>
        </Card>
    )
}
export default PartitionCard