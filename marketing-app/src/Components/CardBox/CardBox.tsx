import React, { useContext } from "react"
import "Components/CardBox/CardBox.css"
/* Components */
import Container from "Components/Container/Container"
import { ThemeContext } from "Theme/Theme"


interface CardBoxInterface {
    gap?: number,
    children: React.ReactNode,
}

const CardBox = ({gap, children}: CardBoxInterface) => {
    const theme = useContext(ThemeContext);

    return (
        <Container  justifyContent="start"
                    style={{
                        gap: gap ? gap : 10
                    }}
        >
            {children}
        </Container>
    )
}
export default CardBox