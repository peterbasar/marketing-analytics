import React from "react"
/* Components */
import Container from "Components/Container/Container"


interface CardInterface {
    padding?: string,
    width?: string,
    aspectRatio?: number,
    style?: React.CSSProperties,
    children: React.ReactNode,
}

const Card = ({padding, aspectRatio, width, style, children}: CardInterface) => {
    let useWidth: string = width ? width : "200px"
    let usePadding: string = padding ? padding : "10px";

    return (
        <Container flexDirection="row" style={{
            width: `calc(${useWidth} - ${usePadding} - ${usePadding})`,
            aspectRatio: aspectRatio ? `${aspectRatio}` : "1",
            borderRadius: "var(--border-radius)",
            padding: usePadding,
            ...style,
        }}>
            {children}
        </Container>
    )
}
export default Card