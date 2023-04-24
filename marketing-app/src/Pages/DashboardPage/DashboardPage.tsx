import React from "react";
import "Pages/DashboardPage/DashboardPage.css"
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
import DashboardBar from "Pages/DashboardPage/Components/DashboardBar/DashboardBar";
import DashboardContainer from "Components/DashboardContainer/DashboardContainer";
import DashboardItem from "Components/DashboardItem/DashboardItem"
import PerformanceReportTable from "Components/Tables/PerformanceReportTable";
import RevenueSpendBarChart from "Components/Charts/RevenueSpendBarChart/RevenueSpendBarChart";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const DashboardPage = () => {
    /* i18n */
    const { t } = useTranslation()
    /* Zustand */
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)


    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading={`${t("dashboard_page_heading")} - ${selectedPartition?.brand}`}>
                <Container  justifyContent="start" alignContent="start" alignItems="stretch" 
                            flexDirection="column" flexGrow={100} width="100%">
                    <DashboardBar />

                    <DashboardContainer>
                        <DashboardItem
                            heading={`${t("performance_report_table")}`}
                            behavior={{
                                lg: {row: 2,col: 4},
                                md: {row: 2,col: 4},
                                sm: {row: 2,col: 4},
                                default: {row: 4,col: 4},
                            }}
                        >
                            <PerformanceReportTable />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("spending_and_revenue_chart_heading")}`}
                            behavior={{
                                lg: {row: 1,col: 4},
                                md: {row: 2,col: 4},
                                sm: {row: 2,col: 4},
                                default: {row: 2,col: 4},
                            }}
                        >
                            <RevenueSpendBarChart />
                        </DashboardItem>
                    </DashboardContainer>
                </Container>
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default DashboardPage;