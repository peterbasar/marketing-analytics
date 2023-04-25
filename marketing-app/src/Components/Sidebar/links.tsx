/* Contants */
import { FRONTEND_ENDPOINTS } from "config";
/* Components */
import {
    PersonIcon,
    GridIcon,
    AnalyticsIcon,
    FileTray,
} from "Assets/Icons";


export interface linkInterface {
    name: string,
    url: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>,
}


export const links: Array<linkInterface> = [
    {
        name: "select_api_link",
        url: FRONTEND_ENDPOINTS.APIKEY,
        icon: PersonIcon,
    },
    {
        name: "select_partition_link",
        url: FRONTEND_ENDPOINTS.PARTITION,
        icon: GridIcon,
    },
    {
        name: "dashboard_link",
        url: FRONTEND_ENDPOINTS.DASHBOARD,
        icon: AnalyticsIcon,
    },
    {
        name: "dashboard_link",
        url: FRONTEND_ENDPOINTS.PARTITION_DATA,
        icon: FileTray,
    },
]

