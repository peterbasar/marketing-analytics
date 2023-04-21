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
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const DashboardPage = () => {
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)
    const partitions = useDataManagerStore((state) => state.partitions)


    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading="dasboard_page">
                Dashboard page content

                <Container style={{
                        backgroundColor: "gray",
                        width: "100%",
                        padding: "20px 0",
                        borderRadius: "var(--border-radius)"
                    }}
                    justifyContent="start"
                >
                    <p style={{margin: "0 15px"}}>
                        _partition_: {selectedPartition && selectedPartition.brand}
                    </p>
                </Container>

            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default DashboardPage;