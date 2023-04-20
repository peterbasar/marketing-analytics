import { create } from 'zustand'
import { FRONTEND_ENDPOINTS } from 'config'


interface AppStoreInterface {
    activeEndpoint: FRONTEND_ENDPOINTS,
    setActiveEndpoint: (value: string) => void,
}


export const AppStore = create<AppStoreInterface>((
    (set, get) => ({
        activeEndpoint: FRONTEND_ENDPOINTS.APIKEY,
        setActiveEndpoint: (value) => {
            if ((Object.values(FRONTEND_ENDPOINTS) as string[]).includes(value)){
                set({ activeEndpoint: value as FRONTEND_ENDPOINTS })
            }else{
                set({ activeEndpoint: FRONTEND_ENDPOINTS.APIKEY })
            }
        }
    })
))
