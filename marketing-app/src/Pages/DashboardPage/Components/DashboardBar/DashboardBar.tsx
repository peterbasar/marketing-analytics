import React, { useEffect, useRef } from "react";
/* Components */
import Container from "Components/Container/Container";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const DashboardBar = () => {
    /* Zustand */
    const selectedPartition = useDataManagerStore((state) => state.selectedPartition)
    const partitions = useDataManagerStore((state) => state.partitions)

    return (
        <>
            <div style={{width: "inherit"}}>
                <Container style={{
                    outline: "1px solid var(--hex-secondary)",
                    width: "inherit",
                    padding: "20px 0",
                }}
                    justifyContent="start"
                >
                    <p style={{margin: "0 15px"}}>
                        _partition_: {selectedPartition && selectedPartition.brand}, pick_date_range_
                    </p>
                </Container>
            </div>
        </>
    )
}
export default DashboardBar