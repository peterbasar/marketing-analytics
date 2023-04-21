import React, { useContext } from "react"
/* Components */
import Container from "Components/Container/Container"
import { ThemeContext } from "Theme/Theme"
import Card from "Components/Card/Card"


interface PartitionCardInterface {
    brand: string,
    country: string,
    id: string,
    onClick?: () => void,
}

const PartitionCard = ({brand, country, id, onClick}: PartitionCardInterface) => {
    const theme = useContext(ThemeContext);

    const keyValue = (key: string, value: string) => {
        return (
            <div style={{
                    width: "inherit",
                    display: "flex",
                    marginBottom: "5px",
                    color: "var(--hex-primary)"}}>
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
                    background: "var(--hex-secondary)"
                }}
        >
            {/* Brand */}
            {keyValue("_brand_", brand)}
            {/* Id */}
            {keyValue("_id_", id)}
            {/* Country */}
            {keyValue("_contry_", country)}
            
            <button style={{
                        marginTop: "5px",
                        border: "none",
                        padding: "10px",
                        borderRadius: "var(--border-radius)",
                        backgroundColor: "var(--hex-primary)",
                        color: "var(--hex-secondary)"
                    }}
                    onClick={() => {onClick && onClick()}}
            >
                _select_
            </button>
        </Card>
    )
}
export default PartitionCard