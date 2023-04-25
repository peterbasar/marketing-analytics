import React from "react";
import { useNavigate } from "react-router-dom";
import "Components/Sidebar/SidebarDesktop.css"
/* i18n */
import { useTranslation } from "react-i18next";
/* Components */
import { CloseIcon } from "Assets/Icons";
import { linkInterface } from "./links";

import Container from "Components/Container/Container";

interface SidebarDesktopInterface {
    links: Array<linkInterface>
}


const SidebarDesktop = ({ links }: SidebarDesktopInterface) => {
    const navigate = useNavigate()

    /* i18n */
    const { t } = useTranslation()

    return (
        <>
            <div className="sidebar-wrapper-placeholder" />
            <div className="sidebar-wrapper">
                <Container alignContent="start">
                    {
                        links.map((link) => {
                            return (
                                <div    key={link.url}
                                        className="sidebar-link-button"
                                        onClick={() => {navigate(link.url)}}
                                >
                                    <link.icon fill="var(--hex-secondary)"/>
                                </div>
                            )
                        })
                    }

                </Container>
            </div>
        </>
    )
}
export default SidebarDesktop