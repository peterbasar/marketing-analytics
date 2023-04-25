import React from "react";
import { useNavigate } from "react-router-dom";
import "Components/Sidebar/SidebarDesktop.css"
/* i18n */
import i18n from "i18n/i18n";
import { useTranslation } from "react-i18next";
import { AVAILABLE_LANGUAGES } from "i18n/resources";
/* Components */
import { linkInterface } from "./links";
import Container from "Components/Container/Container";
/* Zustand */
import { useAppStore } from "App.store";


interface SidebarDesktopInterface {
    links: Array<linkInterface>
}


const SidebarDesktop = ({ links }: SidebarDesktopInterface) => {
    const navigate = useNavigate()

    /* Zustand */
    const activeEndpoint = useAppStore((state) => state.activeEndpoint)

    /* i18n */
    const { t } = useTranslation()

    return (
        <>
            <div className="sidebar-wrapper-placeholder" />
            <div className="sidebar-wrapper">
                <Container flexDirection="column" wrap="nowrap" alignContent="stretch">
                    <Container alignContent="flex-start">
                        {
                            links.map((link) => {
                                let selected = link.url === activeEndpoint;
                                return (
                                    <div    key={link.url}
                                            className={selected ? `sidebar-link-button-selected` : `sidebar-link-button`}
                                            onClick={() => {navigate(link.url)}}
                                    >
                                        <link.icon className={selected ? `sidebar-link-icon-selected` : `sidebar-link-icon`} />
                                    </div>
                                )
                            })
                        }
                    </Container>
                    <Container flexDirection="column" justifyContent="flex-end">
                        {
                            Object.keys(AVAILABLE_LANGUAGES).map((languageKey) => {
                                return (
                                    <div    key={languageKey}
                                            className={AVAILABLE_LANGUAGES[languageKey as keyof typeof AVAILABLE_LANGUAGES] === i18n.language ? `sidebar-link-button-selected` : `sidebar-link-button`}
                                            onClick={() => {i18n.changeLanguage(AVAILABLE_LANGUAGES[languageKey as keyof typeof AVAILABLE_LANGUAGES])}}
                                    >
                                        {t(languageKey)}
                                    </div>
                            )
                            })
                        }
                    </Container>
                </Container>
            </div>
        </>
    )
}
export default SidebarDesktop