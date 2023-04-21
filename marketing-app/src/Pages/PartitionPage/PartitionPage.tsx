import React from "react";
import "Pages/PartitionPage/PartitionPage.css"
import { useNavigate } from "react-router-dom";
/* Components */
import Container from "Components/Container/Container";
import Sidebar from "Components/Sidebar/Sidebar";
import BasicContentWrapper from "Components/BasicContentWrapper/BasicContentWrapper";
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";
import Card from "Components/Card/Card";
import CardBox from "Components/CardBox/CardBox";
import PartitionCard from "Components/PartitionCard/PartitionCard";
/* Constants */
import { FRONTEND_ENDPOINTS } from "config";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const PartitionPage = () => {
    /* Zustand */
    const navigate = useNavigate();
    const paritions = useDataManagerStore((state) => state.partitions)
    const setSelectedPartition = useDataManagerStore((state) => state.setSelectedPartition)


    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading="partition_page_heading">
                <CardBox>
                    {   paritions.map((item) => {
                            return (
                                <PartitionCard
                                    key={item.id}
                                    country={item.country}
                                    brand={item.brand}
                                    id={item.id}
                                    onClick={() => {
                                        setSelectedPartition(item)
                                        navigate(FRONTEND_ENDPOINTS.DASHBOARD)
                                    }}
                                />                   
                            )
                        })
                    }
                </CardBox>
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default PartitionPage;