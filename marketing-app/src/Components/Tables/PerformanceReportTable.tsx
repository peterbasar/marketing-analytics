import React, { useContext } from "react"
/* Components */
import { performanceReportItemInterface } from "Components/DataManager/DataManager.interfaces";
/* MUI */
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field:  "source", headerName: '_source_', width: 340, type: "number" },
  { field: "revenue", headerName: '_revenue_', minWidth: 100, flex: 1, type: "number" },
  { field: "conversions", headerName: '_conversions_', minWidth: 120, flex: 1, type: "number" },
  { field: "spend", headerName: '_spend_', type: 'number', minWidth: 100, flex: 1 },
  {
    field: "roas",
    headerName: '_roas_',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    minWidth: 100,
    flex: 0.5,
  },
  {
    field: "cpa",
    headerName: '_cpa_',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    minWidth: 100,
    flex: 0.5,
  },
];


interface PerformanceReportTableInterface {
  rows: Array<performanceReportItemInterface>,
}

const PerformanceReportTable = ({rows}: PerformanceReportTableInterface) => {
    return (
        <div style={{height: "100%", width: "100%"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => {return row.source}}
            checkboxSelection
          />
        </div>
      );
}
export default PerformanceReportTable