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
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const DashboardPage = () => {
    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading="dasboard_page">
                <Container  justifyContent="start" alignContent="start" alignItems="start" 
                            flexDirection="column" flexGrow={100} width="100%">
                    <DashboardBar />
                    <div style={{
                        backgroundColor: "blue",
                        height: "700px",
                        width: "inherit",
                    }}>

                    </div>
                </Container>
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default DashboardPage;