import React from "react";
import "Pages/PartitionDataPage/PartitionDataPage.css"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
/* Components */
import Container from "Components/Container/Container";
import Sidebar from "Components/Sidebar/Sidebar";
import BasicContentWrapper from "Components/BasicContentWrapper/BasicContentWrapper";
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";
import Card from "Components/Card/Card";
import CardBox from "Components/CardBox/CardBox";
import PartitionCard from "Components/PartitionCard/PartitionCard";
import DatetimeRangeBar from "Components/DatetimeRangeBar/DatetimeRangeBar";
import DashboardContainer from "Components/DashboardContainer/DashboardContainer";
import DashboardItem from "Components/DashboardItem/DashboardItem"
import PartitionDataTable from "Components/Tables/ParitionDataTable";
import RevenueSpendBarChart from "Components/Charts/RevenueSpendBarChart/RevenueSpendBarChart";
import CustomPieChart from "Components/Charts/CustomPieChart/CustomPieChart";
import RoasCpaBarChart from "Components/Charts/RoasCpaBarChart/RoasCpaBarChart";
import ConversionsSankeyChart from "Components/Charts/ConversionsSankeyChart/ConversionsSankeyChart";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const PartitionDataPage = () => {
    /* i18n */
    const { t } = useTranslation()
    /* Zustand */
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)
    const performanceReportData = useDataManagerStore((state) => state.performanceReportData)
    const selectedPerformanceReportData = useDataManagerStore((state) => state.selectedPerformanceReportData)
    const selectedSources = useDataManagerStore((state) => state.selectedSources)

    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading={`${t("partition_data_page_heading")} - ${selectedPartition?.brand}`}>
                <Container  justifyContent="start" alignContent="start" alignItems="stretch" 
                            flexDirection="column" flexGrow={100} width="100%">

                    <DatetimeRangeBar />

                    <DashboardContainer>
                        
                        <DashboardItem
                            heading={`${t("partition_data_table")}`}
                            behavior={{
                                lg: {row: 2,col: 4},
                                md: {row: 2,col: 4},
                                sm: {row: 3,col: 4},
                                default: {row: 4,col: 4},
                            }}
                        >
                            <PartitionDataTable />
                        </DashboardItem>

                    </DashboardContainer>
                </Container>
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default PartitionDataPage;