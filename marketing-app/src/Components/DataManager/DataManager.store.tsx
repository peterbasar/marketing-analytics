import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { 
    paritionInterface,
    partitionDataItemInterface,
    performanceReportItemInterface,
} from 'Components/DataManager/DataManager.interfaces'


interface useDataManagerStoreInterface {
    apiKey: string,
    setApiKey: (value: string) => void,

    partitions: Array<paritionInterface>,
    setPartitions: (value: Array<paritionInterface>) => void,
    selectedPartition: string,
    setSelectedPartition: (value: string) => void,

    sources: Array<string>,
    setSources: (value: Array<string>) => void,
    
    partitionData: Array<partitionDataItemInterface>,
    setPartitionData: (value: Array<partitionDataItemInterface>) => void,

    performanceReportData: Array<performanceReportItemInterface>,
    setPerformanceReportData: (value: Array<performanceReportItemInterface>) => void,
}


export const useDataManagerStore = create(persist<useDataManagerStoreInterface>((
    (set, get) => (
        {
            apiKey: "",
            setApiKey: (value) => {
                set({ apiKey: value })
            },

            partitions: [],
            setPartitions(value) {
                set({partitions: value})
            },
            selectedPartition: "",
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
        })
    ),
    {
        name: 'useDataManagerStore', // unique name
        storage: createJSONStorage(() => localStorage),
    }
))
