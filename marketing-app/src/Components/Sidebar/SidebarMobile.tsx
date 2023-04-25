import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "Components/Sidebar/SidebarMobile.css"
/* i18n */
import { useTranslation } from "react-i18next";
import i18n from "i18n/i18n";
/* Components */
import { CloseIcon, MenuIcon } from "Assets/Icons";
import { linkInterface } from "./links";
import Container from "Components/Container/Container";
import { GlobeIcon } from "Assets/Icons";
import { AVAILABLE_LANGUAGES } from "i18n/resources";
import UnhideOnViewportWrapper from "Animations/UnhideOnViewportWrapper";
/* Zustand */
import { useAppStore } from "App.store";


interface SidebarMobileInterface {
    links: Array<linkInterface>
}

const SidebarMobile = ({ links }: SidebarMobileInterface) => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState<boolean>(false);

    /* Zustand */
    const activeEndpoint = useAppStore((state) => state.activeEndpoint)

    /* i18n */
    const { t } = useTranslation()

    return (
        <>
            {
                isOpen
                ? (
                        <div className="sidebar-wrapper-mobile">
                            <UnhideOnViewportWrapper>
                                <Container flexDirection="column" alignItems="stretch" justifyContent="start">
                                    <ul className="sidebar-mobile-ul">
                                        <li onClick={() => {setIsOpen(false)}}>
                                            <div className="sidebar-icon-mobile-wrapper">
                                                <CloseIcon className="sidebar-mobile-close-button sidebar-icon-mobile" />                  
                                            </div>
                                        </li>
                                        {
                                            links.map((link) => {
                                                let selected = link.url === activeEndpoint;
                                                return (
                                                    <li     key={link.url}
                                                            className={selected ? "sidebar-mobile-li-selected" : ""}
                                                            onClick={() => {navigate(link.url)}}
                                                    >
                                                        <Container justifyContent="space-between">
                                                            <div className="sidebar-icon-mobile-wrapper">
                                                                <link.icon 
                                                                    className={selected ? "sidebar-icon-mobile-selected" : "sidebar-icon-mobile"}
                                                                />
                                                            </div>
                                                            <div>{t(link.name)}</div>
                                                        </Container>               
                                                    </li>
                                                )
                                            })
                                        }
                                        {/* Map language options */}
                                        {
                                            Object.keys(AVAILABLE_LANGUAGES).map((languageKey) => {
                                                let selected = languageKey === i18n.language;
                                                return (
                                                    <li     key={languageKey}
                                                            className={selected ? "sidebar-mobile-li-selected" : ""}
                                                            onClick={() => {i18n.changeLanguage(languageKey)}}
                                                    >
                                                        <Container justifyContent="space-between">
                                                            <div className="sidebar-icon-mobile-wrapper">
                                                                <GlobeIcon 
                                                                    className={selected ? "sidebar-icon-mobile-selected" : "sidebar-icon-mobile"}
                                                                />
                                                            </div>
                                                            <div>{t(languageKey)}</div>
                                                        </Container>               
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Container>
                            </UnhideOnViewportWrapper>
                        </div>
                )
                : (
                    <div    onClick={() => {setIsOpen(true)}}
                            className="sidebar-mobile-open-button-wrapper animation-unhide"
                    >
                        <MenuIcon className="sidebar-mobile-open-button" />
                    </div>
                )
            }
        </>
    )
}
export default SidebarMobile