import React, { useEffect, useRef } from "react";
import dayjs from 'dayjs';
/* Components */
import Container from "Components/Container/Container";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";
/* MUI */
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
/* i18n */
import { useTranslation } from "react-i18next";


const DashboardBar = () => {
    /* i18n */
    const { t } = useTranslation()

    /* Zustand */
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)
    const partitions = useDataManagerStore((state) => state.partitions)
    const dateRangeStart = useDataManagerStore((state) => state.dateRangeStart)
    const dateRangeEnd = useDataManagerStore((state) => state.dateRangeEnd)
    const setDateRangeWithValues = useDataManagerStore((state) => state.setDateRangeWithValues)

    return (
        <>
            <Container style={{
                borderRadius: "var(--border-radius)",
                outline: "1px solid var(--hex-secondary)",
                width: "inherit",
                padding: "20px 20px",
            }}
                justifyContent="start"
            >
                <p style={{margin: "10px"}}>
                    {t("date_range")}:
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div style={{margin: "10px"}}>
                        <DatePicker label={t("date_range_start")} value={dayjs(dateRangeStart)} 
                            maxDate={dayjs(dateRangeEnd)}
                            onChange={(e) => {
                                if (e){
                                        setDateRangeWithValues(
                                            "dateRangeStart",
                                            e.year(), e.month()+1, e.date()
                                        )
                                    }
                            }}
                        />
                    </div>
                    
                    <div style={{margin: "10px"}}>
                        <DatePicker label={t("date_range_end")} value={dayjs(dateRangeEnd)} 
                            minDate={dayjs(dateRangeStart)}
                            onChange={(e) => {
                                if (e){
                                        setDateRangeWithValues(
                                            "dateRangeEnd",
                                            e.year(), e.month()+1, e.date()
                                        )
                                    }
                            }} 
                        />
                    </div>
                    

                    {/* <DateRangePicker
                        defaultValue={[dayjs(dateRangeStart), dayjs(dateRangeEnd)]}
                        onChange={(e) => {
                            if (e[0] && e[1]){
                                setDateRangeWithValues(
                                    "dateRangeStart",
                                    e[0].year(), e[0].month()+1, e[0].date()
                                )
                                setDateRangeWithValues(
                                    "dateRangeEnd",
                                    e[1].year(), e[1].month()+1, e[1].date()
                                )
                            }
                        }}
                        localeText={{
                            start: "",
                            end: "",
                        }}
                    /> */}
                </LocalizationProvider>
            </Container>
        </>
    )
}
export default DashboardBar