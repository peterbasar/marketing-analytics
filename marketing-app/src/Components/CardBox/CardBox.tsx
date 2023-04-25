import React, { useContext } from "react"
import "Components/CardBox/CardBox.css"
/* Components */
import Container from "Components/Container/Container"
import { ThemeContext } from "Theme/Theme"
/* Zustand */
import { useAppStore } from "App.store"


interface CardBoxInterface {
    gap?: number,
    children: React.ReactNode,
}

const CardBox = ({gap, children}: CardBoxInterface) => {
    const theme = useContext(ThemeContext);

    /* Zustand */
    const windowBreakId = useAppStore((state) => state.windowBreakId)

    return (
        <Container  justifyContent={ windowBreakId == "default" ? "center" : "flex-start"}
                    style={{
                        gap: gap ? gap : 10
                    }}
        >
            {children}
        </Container>
    )
}
export default CardBox