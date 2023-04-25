import React, { forwardRef, ForwardedRef } from "react";
import "Components/Container/Container.css"


interface ContainerInterface {
    wrap?: "wrap" | "nowrap",
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly" | "flex-start" | "flex-end" | "left" | "right",
    flexGrow?: number | "inherit" | "initial" | "revert" | "revert-layer" | "unset",
    alignItems?: "stretch" | "baseline" | "center" | "flex-end" | "flex-start",
    alignContent?: "flex-start" | "center" | "space-between" | "space-around" | "flex-end" | "space-evenly" | "stretch",
    width?: string,
    className?: "string",
    style?: React.CSSProperties,
    children: React.ReactNode,
}

const Container = forwardRef<HTMLDivElement, ContainerInterface>(({
        wrap,
        flexDirection,
        justifyContent,
        flexGrow,
        alignItems,
        alignContent,
        width,
        className,
        style,
        children,
}, ref) => {
    return (
        <div    className={`container ${className}`}
                ref={ref}
                style={{
            flexWrap: wrap ? wrap : "wrap",
            flexDirection: flexDirection ? flexDirection : "row",
            justifyContent: justifyContent ? justifyContent : "center",
            flexGrow: flexGrow ? flexGrow : "initial",
            alignItems: alignItems ? alignItems : "center",
            alignContent: alignContent ? alignContent : "center",
            width: width ? width : "inherit",
            ...style,
        }}>
            {children}
        </div>
    )
})
export default Container;