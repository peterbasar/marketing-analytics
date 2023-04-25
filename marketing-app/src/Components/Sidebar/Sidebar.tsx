import React from "react";
import { useNavigate } from "react-router-dom";
/* Components */
import { links } from "./links";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
/* Zustand */
import { useAppStore } from "App.store";


const Sidebar = () => {
    const navigate = useNavigate()

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