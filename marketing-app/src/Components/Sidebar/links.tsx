/* Contants */
import { FRONTEND_ENDPOINTS } from "config";
/* Components */
import {
    PersonIcon,
    GridIcon,
    AnalyticsIcon,
    FileTrayIcon,
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
        name: "set_api_link",
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
        name: "partition_data_link",
        url: FRONTEND_ENDPOINTS.PARTITION_DATA,
        icon: FileTrayIcon,
    },
]

