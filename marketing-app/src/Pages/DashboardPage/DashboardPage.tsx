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
import DatetimeRangeBar from "Components/DatetimeRangeBar/DatetimeRangeBar";
import DashboardContainer from "Components/DashboardContainer/DashboardContainer";
import DashboardItem from "Components/DashboardItem/DashboardItem"
import PerformanceReportTable from "Components/Tables/PerformanceReportTable";
import RevenueSpendBarChart from "Components/Charts/RevenueSpendBarChart/RevenueSpendBarChart";
import CustomPieChart from "Components/Charts/CustomPieChart/CustomPieChart";
import RoasCpaBarChart from "Components/Charts/RoasCpaBarChart/RoasCpaBarChart";
import ConversionsSankeyChart from "Components/Charts/ConversionsSankeyChart/ConversionsSankeyChart";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const DashboardPage = () => {
    /* i18n */
    const { t } = useTranslation()
    /* Zustand */
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)
    const performanceReportData = useDataManagerStore((state) => state.performanceReportData)
    const selectedPerformanceReportData = useDataManagerStore((state) => state.selectedPerformanceReportData)
    const selectedSources = useDataManagerStore((state) => state.selectedSources)

    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading={`${t("dashboard_page_heading")} - ${selectedPartition?.brand}`}>
                <Container  justifyContent="start" alignContent="start" alignItems="stretch" 
                            flexDirection="column" flexGrow={100} width="100%">
                    <DatetimeRangeBar />

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
                            heading={`${t("roas_and_cpa_chart_heading")}`}
                            behavior={{
                                lg: {row: 1,col: 4},
                                md: {row: 2,col: 4},
                                sm: {row: 2,col: 4},
                                default: {row: 3,col: 4},
                            }}
                        >
                            <RoasCpaBarChart />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("roas")}`}
                            behavior={{
                                lg: {row: 2,col: 2},
                                md: {row: 2,col: 2},
                                sm: {row: 4,col: 4},
                                default: {row: 4,col: 4},
                            }}
                        >
                            <CustomPieChart
                                data={ (() => { 
                                    return selectedPerformanceReportData.map((row) => {
                                        return { name: row.source, value: Math.round(row.roas*100)/100 }
                                    })
                                })()
                                }
                            />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("cpa")}`}
                            behavior={{
                                lg: {row: 2,col: 2},
                                md: {row: 2,col: 2},
                                sm: {row: 4,col: 4},
                                default: {row: 4,col: 4},
                            }}
                        >
                            <CustomPieChart
                                data={ (() => { 
                                    return selectedPerformanceReportData.map((row) => {
                                        return { name: row.source, value: Math.round(row.cpa*100)/100 }
                                    })
                                })()
                                }
                            />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("spending_and_revenue_chart_heading")}`}
                            behavior={{
                                lg: {row: 1,col: 4},
                                md: {row: 2,col: 4},
                                sm: {row: 2,col: 4},
                                default: {row: 3,col: 4},
                            }}
                        >
                            <RevenueSpendBarChart />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("spending")}`}
                            behavior={{
                                lg: {row: 2,col: 2},
                                md: {row: 2,col: 2},
                                sm: {row: 4,col: 4},
                                default: {row: 4,col: 4},
                            }}
                        >
                            <CustomPieChart
                                data={ (() => { 
                                    return selectedPerformanceReportData.map((row) => {
                                        return { name: row.source, value: Math.round(row.spend) }
                                    })
                                })()
                                }
                            />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("revenue")}`}
                            behavior={{
                                lg: {row: 2,col: 2},
                                md: {row: 2,col: 2},
                                sm: {row: 4,col: 4},
                                default: {row: 4,col: 4},
                            }}
                        >
                            <CustomPieChart
                                data={ (() => { 
                                    return selectedPerformanceReportData.map((row) => {
                                        return { name: row.source, value: Math.round(row.revenue) }
                                    })
                                })()
                                }
                            />
                        </DashboardItem>

                        <DashboardItem
                            heading={`${t("conversions")}`}
                            behavior={{
                                lg: {row: selectedPerformanceReportData.length > 6 ? 4 : 2, col: 4},
                                md: {row: selectedPerformanceReportData.length > 6 ? 4 : 2, col: 4},
                                sm: {row: selectedPerformanceReportData.length > 6 ? 6 : 2, col: 4},
                                default: {row: selectedPerformanceReportData.length > 6 ? 10 : 2, col: 4},
                            }}
                        >
                            <ConversionsSankeyChart />
                        </DashboardItem>
                        

                    </DashboardContainer>
                </Container>
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default DashboardPage;