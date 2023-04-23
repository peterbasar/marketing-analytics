import React, { useEffect } from "react"
/* Data fetching calls */
import getListOfPartitions from "./api/getListOfPartitions"
import getListOfSources from "Components/DataManager/api/getListOfSources"
import getPartitionData from "Components/DataManager/api/getPartitionData"
import getPerformanceReport from "Components/DataManager/api/getPerformanceReport"
import getSummaryStatistics from "./api/getSummaryStatistics"
import getRevenue from "./api/getRevenue"
import getConversions from "./api/getConversions"
import getSpend from "./api/getSpend"
/* utils */
import { getApiDateParam } from "./api/utils"
/* Zustand */
import { useDataManagerStore, useDataManagerStoreInterface } from "./DataManager.store"


interface DataManagerInterface {
    children: React.ReactNode
}

const DataManager = ({children}: DataManagerInterface) => {
    /* Zustand */
    const apiKey = useDataManagerStore((state) => state.apiKey);
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition);
    const setSelectedPartition = useDataManagerStore((state) => state.setSelectedPartition);
    const setPartitions = useDataManagerStore((state) => state.setPartitions);
    const setPerformanceReportData = useDataManagerStore((state) => state.setPerformanceReportData);


    /* Request list of partitions on each apiKey change and on load */
    useEffect(() => {    
        getListOfPartitions({xApiKey: apiKey}).then((partitions) => {
            if (partitions !== null) {
                setPartitions(partitions)
                if (partitions.length > 0){
                    setSelectedPartition(partitions[0])
                }else{
                    setSelectedPartition(null)
                }
            }else{
                setSelectedPartition(null);
                setPartitions([]);
            }
        });
    }, [apiKey]);


    /* Request performance report on each selected parition change and on load if selected parition exists */
    useEffect(() => {    
        if (selectedPartition) {
            getPerformanceReport({
                xApiKey: apiKey,
                partitionId: selectedPartition.id,
                fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
                toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
                optimisationTarget: "revenue",
            }).then((report) => {
                if (report){
                    setPerformanceReportData(report);
                }
            });    
        }else{
            setPerformanceReportData([]);
        }
    }, [selectedPartition]);



        // getListOfSources({
        //         xApiKey: "XXXXXXXXXXXXXX",
        //         partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //         fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //         toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        // }).then((sources) => {
        //     console.log("sources:", sources)
        // });

        // getPartitionData({
        //     xApiKey: "XXXXXXXXXXXXXX",
        //     partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //     fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //     toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        //     optimisationTarget: "conversions",
        //     source: "direct",
        //     offset: 0,
        //     limit: -1,
        // }).then((data) => {
        //     console.log("partition data:", data)
        // });

        // getPerformanceReport({
        //     xApiKey: "XXXXXXXXXXXXXX",
        //     partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //     fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //     toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        //     optimisationTarget: "revenue",
        // }).then((report) => {
        //     console.log("performance report:", report)
        // });


        // getSummaryStatistics({
        //     xApiKey: "XXXXXXXXXXXXXX",
        //     partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //     fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //     toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        //     optimisationTarget: "revenue",
        // }).then((sources) => {
        //     console.log("summary statistics:", sources)
        // });

        // getRevenue({
        //     xApiKey: "XXXXXXXXXXXXXX",
        //     partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //     fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //     toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        //     optimisationTarget: "revenue",
        // }).then((revenue) => {
        //     console.log("revenue:", revenue)
        // });

        // getConversions({
        //     xApiKey: "XXXXXXXXXXXXXX",
        //     partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //     fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //     toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        //     optimisationTarget: "revenue",
        // }).then((conversions) => {
        //     console.log("conversions:", conversions)
        // });

        // getSpend({
        //     xApiKey: "XXXXXXXXXXXXXX",
        //     partitionId: "932561105d21a54d3d1d2a941164ffec321cd76b",
        //     fromDate: getApiDateParam({year: 2022, month: 1, day: 1}),
        //     toDate: getApiDateParam({year: 2022, month: 12, day: 31}),
        //     optimisationTarget: "revenue",
        // }).then((spend) => {
        //     console.log("spend:", spend)
        // });
    

    return <>{children}</>
}
export default DataManager;