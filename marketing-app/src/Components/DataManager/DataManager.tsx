import React, { useEffect, useRef } from "react"
/* Data fetching calls */
import getListOfPartitions from "./api/getListOfPartitions"
import getPartitionData from "Components/DataManager/api/getPartitionData"
import getPerformanceReport from "Components/DataManager/api/getPerformanceReport"
/* Zustand */
import { useDataManagerStore } from "./DataManager.store"


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
    const selectedPerformanceReportData = useDataManagerStore((state) => state.selectedPerformanceReportData);
    const setSelectedPerformanceReportData = useDataManagerStore((state) => state.setSelectedPerformanceReportData);
    const setPartitionData = useDataManagerStore((state) => state.setPartitionData);
    const dateRangeStart = useDataManagerStore((state) => state.dateRangeStart);
    const dateRangeEnd = useDataManagerStore((state) => state.dateRangeEnd);
    const setDateRangeWithDate = useDataManagerStore((state) => state.setDateRangeWithDate);
    const performanceReportData = useDataManagerStore((state) => state.performanceReportData);
    const selectedSources = useDataManagerStore((state) => state.selectedSources);
    const setSelectedSources = useDataManagerStore((state) => state.setSelectedSources);
    const currentModel = useDataManagerStore((state) => state.currentModel);
    const setCurrentModel = useDataManagerStore((state) => state.setCurrentModel);


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


    /*  Request performance report on (selected partition change, date range change, model change) 
        change and on load if selected parition and date range exists */
    useEffect(() => {    
        if (selectedPartition && dateRangeStart && dateRangeEnd) {
            getPerformanceReport({
                xApiKey: apiKey,
                partitionId: selectedPartition.id,
                fromDate: dateRangeStart,
                toDate: dateRangeEnd,
                optimisationTarget: currentModel,
            }).then((report) => {
                if (report !== null){
                    setPerformanceReportData(report);
                }else{
                    setPerformanceReportData([]);
                }
            });    
        }
    }, [selectedPartition, dateRangeStart, dateRangeEnd, currentModel]);


    /*  Reset date range picker values if selected partition changes -> ignore initial load update
        if there is date already present */
    const dateInitialPageLoad = useRef<boolean>(true);
    useEffect(() => {
        /*  This way we can ignore overwriting date picker time on page refresh
            (selected partition didnt change) */
        if (dateInitialPageLoad.current === false || dateRangeStart === null || dateRangeEnd === null){
            /* Create Date Objects for present date and 1 year old date  */
            const currentDate = new Date()
            let oldDate = new Date()
            oldDate.setFullYear(currentDate.getFullYear() - 1)

            setDateRangeWithDate("dateRangeStart", oldDate)
            setDateRangeWithDate("dateRangeEnd", currentDate)
        }
        dateInitialPageLoad.current = true
        /* Initial page load will permanently set 'dateInitialPageLoad' ref to false */
    }, [selectedPartition]);


    /*  Reset selected sources if new performance report data changes
        -> ignore initial load update unless selected sources are empty */
    const selectedSourcesInitialPageLoad = useRef<boolean>(true);
    useEffect(() => {
        if (selectedSourcesInitialPageLoad.current === false || selectedSources.length === 0){
            /* Create Date Objects for present date and 1 year old date  */
            setSelectedSources(performanceReportData.map((item) => item.source))
        }
        selectedSourcesInitialPageLoad.current = true
        /* Initial page load will permanently set 'selectedSourcesInitialPageLoad' ref to false */
    }, [performanceReportData]);


    /*  If selection changes or the performanceReportData
        -> filter performanceData with selectedSources to selectedPerformanceReportData */
    useEffect(() => {
        setSelectedPerformanceReportData(
            performanceReportData.filter((item) => selectedSources.includes(item.source)))
    }, [selectedSources, performanceReportData]);


    /*  Request partition data on (selected partition change, date range change, model change) 
        change and on load if selected parition and date range exists */
    useEffect(() => {    
        if (selectedPartition && dateRangeStart && dateRangeEnd) {
            getPartitionData({
                xApiKey: apiKey,
                partitionId: selectedPartition.id,
                fromDate: dateRangeStart,
                toDate: dateRangeEnd,
                optimisationTarget: currentModel,
                offset: 0,
                limit: -1,
            }).then((data) => {
                if (data !== null){
                    setPartitionData(data);
                }else{
                    setPartitionData([]);
                }
            });    
        }
    }, [selectedPartition, dateRangeStart, dateRangeEnd, currentModel]);

    return <>{children}</>
}
export default DataManager;