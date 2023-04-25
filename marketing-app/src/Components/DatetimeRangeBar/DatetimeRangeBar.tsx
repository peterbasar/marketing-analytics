import React from "react";
import "Components/DatetimeRangeBar/DatetimeRangeBar.css"
import dayjs from 'dayjs';
/* Components */
import Container from "Components/Container/Container";
import UnhideOnViewportWrapper from "Animations/UnhideOnViewportWrapper";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";
/* MUI */
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
/* i18n */
import { useTranslation } from "react-i18next";


const DatetimeRangeBar = () => {
    /* i18n */
    const { t } = useTranslation()

    /* Zustand */
    const dateRangeStart = useDataManagerStore((state) => state.dateRangeStart)
    const dateRangeEnd = useDataManagerStore((state) => state.dateRangeEnd)
    const setDateRangeWithValues = useDataManagerStore((state) => state.setDateRangeWithValues)

    return (
        <>
            <UnhideOnViewportWrapper>
                <Container style={{
                    borderRadius: "var(--border-radius)",
                    outline: "1px solid var(--hex-secondary)",
                    width: "inherit",
                    gap: "20px",
                }}
                    justifyContent="center"
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className="dashboard-bar-item">
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
                        
                        <div className="dashboard-bar-item">
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
                    </LocalizationProvider>
                </Container>
            </UnhideOnViewportWrapper>
        </>
    )
}
export default DatetimeRangeBar