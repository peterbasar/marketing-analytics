import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { 
    paritionInterface,
    partitionDataItemInterface,
    performanceReportItemInterface,
} from 'Components/DataManager/DataManager.interfaces'


export interface useDataManagerStoreInterface {
    apiKey: string,
    setApiKey: (value: string) => void,

    partitions: Array<paritionInterface>,
    setPartitions: (value: Array<paritionInterface>) => void,
    selectedPartition: paritionInterface | null,
    setSelectedPartition: (value: paritionInterface | null) => void,

    sources: Array<string>,
    setSources: (value: Array<string>) => void,
    
    partitionData: Array<partitionDataItemInterface>,
    setPartitionData: (value: Array<partitionDataItemInterface>) => void,

    performanceReportData: Array<performanceReportItemInterface>,
    setPerformanceReportData: (value: Array<performanceReportItemInterface>) => void,

    dateRangeStart: string | null,
    dateRangeEnd: string | null,
    setDateRangeWithDate: (type: "dateRangeStart" | "dateRangeEnd", value: Date) => void,
    setDateRangeWithValues: (
        type: "dateRangeStart" | "dateRangeEnd",
        year: number, month: number, day: number
    ) => void,

}


export const useDataManagerStore = create(persist<useDataManagerStoreInterface>((
    (set, get) => (
        {
            apiKey: "",
            setApiKey: (value) => {
                set({ apiKey: value })
            },

            partitions: [],
            setPartitions: (value) => {
                set({partitions: value})
            },
            selectedPartition: null,
            setSelectedPartition(value) {
                set({selectedPartition: value})
            },

            sources: [],
            setSources(value) {
                set({sources: value})
            },

            partitionData: [],
            setPartitionData(value) {
                set({partitionData: value})
            },

            performanceReportData: [],
            setPerformanceReportData(value) {
                set({performanceReportData: value})
            },

            dateRangeStart: null,
            dateRangeEnd: null,
            setDateRangeWithDate(type, value) {
                set({[type]: `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`})
            },
            setDateRangeWithValues(type, year, month, day) {
                set({[type]: `${year}-${month}-${day}`})
            },
        }
    )),
    {
        name: 'useDataManagerStore', // unique name
        storage: createJSONStorage(() => localStorage),
    }
))
