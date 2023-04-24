import React, { useContext } from "react"
/* Components */
import Container from "Components/Container/Container"
import { ThemeContext } from "Theme/Theme"
import Card from "Components/Card/Card"
/* i18n */
import { useTranslation } from "react-i18next"


interface PartitionCardInterface {
    brand: string,
    country: string,
    id: string,
    onClick?: () => void,
}

const PartitionCard = ({brand, country, id, onClick}: PartitionCardInterface) => {
    /* i18n */
    const { t } = useTranslation()

    const theme = useContext(ThemeContext);

    const keyValue = (key: string, value: string) => {
        return (
            <div style={{
                    width: "inherit",
                    display: "flex",
                    marginBottom: "5px",
                    color: "var(--hex-secondary)"}}>
                <p style={{margin: "0"}}>{key}:&nbsp;</p>
                <p style={{margin: "0", overflow: "hidden", textOverflow: "ellipsis",}}>
                    {value}
                </p>
            </div> 
        )
    }

    return (
        <Card   width="200px" padding="20px"
                style={{
                    border: "1px solid var(--hex-secondary)",
                }}
        >
            {/* Brand */}
            {keyValue(t("brand"), brand)}
            {/* Id */}
            {keyValue(t("id"), id)}
            {/* Country */}
            {keyValue(t("country"), country)}
            
            <button style={{
                    marginTop: "5px",
                    padding: "10px",
                    borderRadius: "var(--border-radius)",
                    border: "1px solid var(--hex-secondary)",
                    color: "var(--hex-secondary)",
                    backgroundColor: "var(--hex-primary)"
                }}
                onClick={() => {onClick && onClick()}}
            >
                {t("select")}
            </button>
        </Card>
    )
}
export default PartitionCard