import React, { useEffect, useContext, useRef, useState } from "react"
import "Components/DashboardContainer/DashboardContainer.css"
/* Components */
import Container from "Components/Container/Container"
import { ThemeContext } from "Theme/Theme"


interface DashboardContextInterface {
    dashboardWidth: number,
}
export const DashboardContext = React.createContext<DashboardContextInterface>({
    dashboardWidth: 0
});


interface DashboardContainerInterface {
    width?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
}


const DashboardContainer = ({width, style, children}: DashboardContainerInterface) => {
    const theme = useContext(ThemeContext);
    let useWidth: string = width ? width : "inherit"

    /* Read dashboard container width */
    const [dashboardWidth, setDashboardWidth] = useState<number>(0);
    const dashboardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("dashboardRef:", dashboardRef)
        const handleResize = () => {
            if (dashboardRef && dashboardRef.current){
                setDashboardWidth(dashboardRef.current.offsetWidth);
                console.log(dashboardRef.current.offsetWidth);
            }
        }
        window.addEventListener('resize', handleResize);

        /* Call initially */
        handleResize();

        /* Unmount */
        return( () => {
            window.removeEventListener('resize', handleResize)
        });
    }, [dashboardRef])


    return (
        <DashboardContext.Provider value={{
            dashboardWidth: dashboardWidth
        }}>
            <div
                ref={dashboardRef} 
                style={{
                    width: useWidth,

                    // Grid 
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridAutoRows: "1fr",
                }}
            >
                {children}    
            </div>
        </DashboardContext.Provider>
    )
}
export default DashboardContainer