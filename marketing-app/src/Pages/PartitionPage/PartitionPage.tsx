import React from "react";
import "Pages/PartitionPage/PartitionPage.css"
/* Components */
import Container from "Components/Container/Container";
import Sidebar from "Components/Sidebar/Sidebar";
import BasicContentWrapper from "Components/BasicContentWrapper/BasicContentWrapper";
import BasicPageWrapper from "Components/BasicPageWrapper/BasicPageWrapper";


const PartitionPage = () => {
    return (
        <BasicPageWrapper>
            <BasicContentWrapper heading="partition_page_heading">
                Content children
            </BasicContentWrapper>
        </BasicPageWrapper>
    )
}
export default PartitionPage;