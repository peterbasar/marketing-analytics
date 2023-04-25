import { create } from 'zustand'
import { FRONTEND_ENDPOINTS } from 'config'
import { RESPONSIVE_BREAKS_INTERFACE, getBreakId } from 'config'


interface useAppStoreInterface {
    activeEndpoint: FRONTEND_ENDPOINTS,
    setActiveEndpoint: (value: string) => void,

    windowBreakId: keyof RESPONSIVE_BREAKS_INTERFACE,
    windowWidth: number,
    setWindowWidth: (value: number) => void,
}


export const useAppStore = create<useAppStoreInterface>((
    (set, get) => ({
        activeEndpoint: FRONTEND_ENDPOINTS.APIKEY,
        setActiveEndpoint: (value) => {
            if ((Object.values(FRONTEND_ENDPOINTS) as string[]).includes(value)){
                set({ activeEndpoint: value as FRONTEND_ENDPOINTS })
            }else{
                set({ activeEndpoint: FRONTEND_ENDPOINTS.APIKEY })
            }
        },
        windowBreakId: "default",
        windowWidth: 1920,
        setWindowWidth: (value) => {
            set({
                windowWidth: value,
                windowBreakId: getBreakId(value),
            })
        }
    })
))
