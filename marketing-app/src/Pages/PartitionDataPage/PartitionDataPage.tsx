import React from "react";
import "Pages/PartitionDataPage/PartitionDataPage.css"
import { useTranslation } from "react-i18next";
/* Components */
import Container from "Components/Container/Container";
import BasicContentWrapper from "Components/BasicContentWrapper/BasicContentWrapper";
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";
import DatetimeRangeBar from "Components/DatetimeRangeBar/DatetimeRangeBar";
import DashboardContainer from "Components/DashboardContainer/DashboardContainer";
import DashboardItem from "Components/DashboardItem/DashboardItem"
import PartitionDataTable from "Components/Tables/ParitionDataTable";
import InvalidApiKeyBlock from "Components/InvalidApiKeyBlock/InvalidApiKeyBlock";
import PageInfoAlert from "Components/PageInfoAlert/PageInfoAlert";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const PartitionDataPage = () => {
    /* i18n */
    const { t } = useTranslation()
    /* Zustand */
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)

    return (
        <BasicPageWrapper>
            <PageInfoAlert />
            <InvalidApiKeyBlock>
                <BasicContentWrapper heading={`${t("partition_data_page_heading")} - ${selectedPartition?.brand}`}>
                    <Container  justifyContent="start" alignContent="flex-start" alignItems="stretch" 
                                flexDirection="column" flexGrow={100} width="100%">

                        <DatetimeRangeBar />

                        <DashboardContainer>
                            
                            <DashboardItem
                                heading={`${t("partition_data_table")}`}
                                behavior={{
                                    lg: {row: 2,col: 4},
                                    md: {row: 2,col: 4},
                                    sm: {row: 3,col: 4},
                                    default: {row: 6,col: 4},
                                }}
                            >
                                <PartitionDataTable />
                            </DashboardItem>

                        </DashboardContainer>
                    </Container>
                </BasicContentWrapper>
            </InvalidApiKeyBlock>
        </BasicPageWrapper>
    )
}
export default PartitionDataPage;