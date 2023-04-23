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
    behavior: DasboardItemScreenBehaviorInterface,
    margin?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
}


const DashboardItem = ({behavior, margin, style, children}: DashboardItemInterface) => {
    const theme = useContext(ThemeContext);
    const dashboardContainer = useContext(DashboardContext);

    let useMargin: string = margin ? margin : "5px";

    /* Based on the current dashboard parent width -> choose grid behavior */
    console.log(getBreakId(dashboardContainer.dashboardWidth))
    const breakId = useMemo(() => {
        return getBreakId(dashboardContainer.dashboardWidth)
    }, [dashboardContainer])
    console.log("current breakId:", breakId)

    return (
        <div className="dashboard-item-outer-wrapper" style={{
            gridColumn: `span ${behavior[breakId].col}`,
            gridRow: `span ${behavior[breakId].row}`,
            aspectRatio: `${Math.round(behavior[breakId].col/behavior[breakId].row)}`,
        }}>
            <div    className="dashboard-item-inner-wrapper"
                    style={{margin: useMargin}}
            >
                {children}
            </div>
        </div>
    )
}
export default DashboardItem