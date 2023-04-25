import React, { useEffect, useContext, useRef, useState } from "react"
/* Components */
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
        const handleResize = () => {
            if (dashboardRef && dashboardRef.current){
                setDashboardWidth(dashboardRef.current.offsetWidth);
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
                    gridAutoRows: "auto",
                }}
            >
                {children}    
            </div>
        </DashboardContext.Provider>
    )
}
export default DashboardContainer