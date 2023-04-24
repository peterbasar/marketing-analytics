import React, { useContext, useEffect, useMemo } from "react"
import "Components/DashboardItem/DashboardItem.css"
/* Components */
import Container from "Components/Container/Container"
import { ThemeContext } from "Theme/Theme"
import { DashboardContext } from "Components/DashboardContainer/DashboardContainer"
/* Constants */
import { RESPONSIVE_BREAKS_INTERFACE } from "config"
import { getBreakId } from "config"


interface DasboardItemGridLayoutInterface {
    row: number,
    col: number,
}


interface DasboardItemScreenBehaviorInterface extends Record<
    keyof RESPONSIVE_BREAKS_INTERFACE,
    DasboardItemGridLayoutInterface
> {};


interface DashboardItemInterface {
    heading?: string,
    behavior: DasboardItemScreenBehaviorInterface,
    margin?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
}


const DashboardItem = ({heading, behavior, margin, style, children}: DashboardItemInterface) => {
    const theme = useContext(ThemeContext);
    const dashboardContainer = useContext(DashboardContext);

    /* Perceived distance between items */
    let useMargin: string = margin ? margin : "15px";

    /* Based on the current dashboard parent width -> choose grid behavior */
    const breakId = useMemo(() => {
        return getBreakId(dashboardContainer.dashboardWidth)
    }, [dashboardContainer])

    /* Heading and content style settings */
    const headingMargin = 15
    const headingHeight = 20
    const contentHeight = heading ? `calc(100% - ${2*headingMargin + headingHeight}px)` : "100%"

    return (
        <div className="dashboard-item-outer-wrapper" style={{
            gridColumn: `span ${behavior[breakId].col}`,
            gridRow: `span ${behavior[breakId].row}`,
            aspectRatio: `${Math.round(behavior[breakId].col/behavior[breakId].row)}`,
        }}>
            <div    className="dashboard-item-inner-wrapper"
                    style={{margin: useMargin}}
            >
                <Container wrap="nowrap" alignItems="stretch" flexDirection="column" style={{overflow: "hidden"}}>
                    { heading 
                        ? (<h2 style={{height: `${headingHeight}px`, margin: `${headingMargin}px`,}}>{heading}</h2>)
                        : (<></>)
                    }
                    <div style={{height: contentHeight}}>
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default DashboardItem