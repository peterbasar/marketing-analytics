import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "Components/Sidebar/SidebarMobile.css"
/* i18n */
import { useTranslation } from "react-i18next";
/* Components */
import { CloseIcon, MenuIcon } from "Assets/Icons";
import { linkInterface } from "./links";
import Container from "Components/Container/Container";


interface SidebarMobileInterface {
    links: Array<linkInterface>
}

const SidebarMobile = ({ links }: SidebarMobileInterface) => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState<boolean>(false);

    /* i18n */
    const { t } = useTranslation()

    return (
        <>
            {
                isOpen
                ? (
                    <div className="sidebar-wrapper-mobile">
                        <Container flexDirection="column" alignItems="stretch" justifyContent="start">
                            <ul className="sidebar-mobile-ul">
                                <li onClick={() => {setIsOpen(false)}}>
                                    <div className="sidebar-icon-mobile-wrapper">
                                        <CloseIcon className="sidebar-mobile-close-button sidebar-icon-mobile" />                  
                                    </div>
                                </li>
                                {
                                    links.map((link) => {
                                        return (
                                            <li     key={link.url}
                                                    className=""
                                                    onClick={() => {navigate(link.url)}}
                                            >
                                                <Container justifyContent="space-between">
                                                    <div className="sidebar-icon-mobile-wrapper">
                                                        <link.icon className="sidebar-icon-mobile" />
                                                    </div>
                                                    <div>{t(link.name)}</div>
                                                </Container>               
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Container>
                    </div>
                )
                : (
                    <div    onClick={() => {setIsOpen(true)}}
                            className="sidebar-mobile-open-button-wrapper"
                    >
                        <MenuIcon className="sidebar-mobile-open-button" />
                    </div>
                )
            }
        </>
    )
}
export default SidebarMobile