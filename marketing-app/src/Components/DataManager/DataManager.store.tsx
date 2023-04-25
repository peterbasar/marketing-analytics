import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { 
    paritionInterface,
    partitionDataItemInterface,
    performanceReportItemInterface,
    revenueSpendDataItemInterface,
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
    selectedPerformanceReportData: Array<performanceReportItemInterface>,
    setSelectedPerformanceReportData: (value: Array<performanceReportItemInterface>) => void,

    dateRangeStart: string | null,
    dateRangeEnd: string | null,
    setDateRangeWithDate: (type: "dateRangeStart" | "dateRangeEnd", value: Date) => void,
    setDateRangeWithValues: (
        type: "dateRangeStart" | "dateRangeEnd",
        year: number, month: number, day: number
    ) => void,

    selectedSources: Array<performanceReportItemInterface["source"]>,
    setSelectedSources: (value: Array<performanceReportItemInterface["source"]>) => void,
    toggleSources: (value: Array<performanceReportItemInterface["source"]>) => void,
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

            selectedPerformanceReportData: [],
            setSelectedPerformanceReportData(value) {
                set({selectedPerformanceReportData: value})
            },

            dateRangeStart: null,
            dateRangeEnd: null,
            setDateRangeWithDate(type, value) {
                set({[type]: `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`})
            },
            setDateRangeWithValues(type, year, month, day) {
                set({[type]: `${year}-${month}-${day}`})
            },

            selectedSources: [],
            setSelectedSources(value){
                set({selectedSources: value})
            },
            toggleSources(value){
                /*  If exists in selectedSources -> ignore in filter, remember item. */
                let foundDuringFilter: Array<string> = []
                let newSelectedSources = get().selectedSources.filter((source) => {
                    if (source in value){
                        foundDuringFilter.push(source)
                        return false
                    }
                })
                /* Append those sources that werent present before but are now toggled */
                newSelectedSources.push(...value.filter((source) => {
                    return !(source in foundDuringFilter)
                }))
                set({selectedSources: newSelectedSources})
            }


        }
    )),
    {
        name: 'useDataManagerStore', // unique name
        storage: createJSONStorage(() => localStorage),
    }
))
