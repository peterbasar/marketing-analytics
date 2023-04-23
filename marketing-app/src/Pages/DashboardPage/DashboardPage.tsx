import React from "react";
import "Pages/DashboardPage/DashboardPage.css"
import { useNavigate } from "react-router-dom";
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
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const DashboardPage = () => {
    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading="dasboard_page">
                <Container  justifyContent="start" alignContent="start" alignItems="start" 
                            flexDirection="column" flexGrow={100} width="100%">
                    <DashboardBar />

                    <DashboardContainer>
                        <DashboardItem
                            behavior={{
                                lg: {row: 1,col: 4},
                                md: {row: 1,col: 2},
                                sm: {row: 1,col: 2},
                                default: {row: 1,col: 1},
                            }}
                        > </DashboardItem>
                        <DashboardItem
                            behavior={{
                                lg: {row: 1,col: 1},
                                md: {row: 1,col: 1},
                                sm: {row: 1,col: 1},
                                default: {row: 1,col: 1},
                            }}
                        > </DashboardItem>
                    </DashboardContainer>
                </Container>
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default DashboardPage;