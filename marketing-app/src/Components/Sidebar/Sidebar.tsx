import React from "react";
/* Components */
import { links } from "./links";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
/* Zustand */
import { useAppStore } from "App.store";


const Sidebar = () => {
    /* Zustand */
    const windowBreakId = useAppStore((state) => state.windowBreakId)
    
    return (
        <>
            { windowBreakId !== "default" && windowBreakId !== "sm"
                ? (
                    <SidebarDesktop links={links} />
                )
                : (
                    <SidebarMobile links={links} />
                )
            }
        </>
    )
}
export default Sidebar