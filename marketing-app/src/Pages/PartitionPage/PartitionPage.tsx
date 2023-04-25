import React from "react";
import "Pages/PartitionPage/PartitionPage.css"
import { useNavigate } from "react-router-dom";
/* Components */
import Container from "Components/Container/Container";
import BasicContentWrapper from "Components/BasicContentWrapper/BasicContentWrapper";
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";
import CardBox from "Components/CardBox/CardBox";
import PartitionCard from "Components/PartitionCard/PartitionCard";
import UnhideOnViewportWrapper from "Animations/UnhideOnViewportWrapper";
import { partitionDataItemInterface } from "Components/DataManager/DataManager.interfaces";
import InvalidApiKeyBlock from "Components/InvalidApiKeyBlock/InvalidApiKeyBlock";
/* Mui */
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
/* Constants */
import { FRONTEND_ENDPOINTS } from "config";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";
/* i18n */
import { useTranslation } from "react-i18next";


const PartitionPage = () => {
    /* i18n */
    const { t } = useTranslation()

    /* Zustand */
    const navigate = useNavigate();
    const paritions = useDataManagerStore((state) => state.partitions)
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)
    const setSelectedPartition = useDataManagerStore((state) => state.setSelectedPartition)
    const currentModel = useDataManagerStore((state) => state.currentModel)
    const setCurrentModel = useDataManagerStore((state) => state.setCurrentModel)


    return (
        <BasicPageWrapper>
            <InvalidApiKeyBlock>
                <BasicContentWrapper heading={`${t("partition_page_heading")}`}>
                    <Container>
                        <UnhideOnViewportWrapper>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="model-select">{t("current_model")}</InputLabel>
                                <Select
                                    labelId="model-select"
                                    value={currentModel}
                                    label={t("current_model")}
                                    onChange={(e) => {setCurrentModel(e.target.value as partitionDataItemInterface["optimisation_target"])}}
                                    style={{marginBottom: "20px"}}
                                >
                                    <MenuItem value={"conversions"}>{t("conversions")}</MenuItem>
                                    <MenuItem value={"revenue"}>{t("revenue")}</MenuItem>
                                </Select>
                            </FormControl>
                        </UnhideOnViewportWrapper>
                    </Container>

                    <UnhideOnViewportWrapper>
                        <CardBox>
                            {   paritions && paritions.map((item) => {
                                    return (
                                        <PartitionCard
                                            key={item.id}
                                            country={item.country}
                                            brand={item.brand}
                                            id={item.id}
                                            selected={selectedPartition ? selectedPartition.id === item.id : false }
                                            onClick={() => {
                                                setSelectedPartition(item)
                                                navigate(FRONTEND_ENDPOINTS.DASHBOARD)
                                            }}
                                        />                   
                                    )
                                })
                            }
                        </CardBox>
                    </UnhideOnViewportWrapper>
                </BasicContentWrapper>
            </InvalidApiKeyBlock>
        </BasicPageWrapper>
    )
}
export default PartitionPage;