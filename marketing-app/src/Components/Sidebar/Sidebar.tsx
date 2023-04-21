import React from "react";
import { useNavigate } from "react-router-dom";
import "Components/Sidebar/Sidebar.css"
import { FRONTEND_ENDPOINTS } from "config";
/* Components */
import { PersonIcon } from "Assets/Icons";
import { GridIcon } from "Assets/Icons";
import { AnalyticsIcon } from "Assets/Icons";
import Container from "Components/Container/Container";


const Sidebar = () => {
    const navigate = useNavigate()

    interface linkInterface {
        url: string,
        icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>,
        onClick: () => void,
    }
    const links: Array<linkInterface> = [
        {
            url: FRONTEND_ENDPOINTS.APIKEY,
            icon: PersonIcon,
            onClick: () => {navigate(FRONTEND_ENDPOINTS.APIKEY)},
        },
        {
            url: FRONTEND_ENDPOINTS.PARTITION,
            icon: GridIcon,
            onClick: () => {navigate(FRONTEND_ENDPOINTS.PARTITION)},
        },
        {
            url: FRONTEND_ENDPOINTS.DASHBOARD,
            icon: AnalyticsIcon,
            onClick: () => {navigate(FRONTEND_ENDPOINTS.DASHBOARD)},
        },
    ]

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
                                        onClick={() => {link.onClick()}}
                                >
                                    <link.icon fill="var(--hex-primary)"/>
                                </div>
                            )
                        })
                    }

                </Container>
            </div>
        </>
    )
}
export default Sidebar