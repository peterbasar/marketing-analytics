import React, { useContext } from "react"
/* Components */
import { performanceReportItemInterface } from "Components/DataManager/DataManager.interfaces";
/* MUI */
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
/* i18n */
import { useTranslation } from "react-i18next";


interface PerformanceReportTableInterface {
  rows: Array<performanceReportItemInterface>,
}

const PerformanceReportTable = ({rows}: PerformanceReportTableInterface) => {
  /* i18n */
  const { t } = useTranslation()
  
  const columns: GridColDef[] = [
    { field:  "source",
      headerName: t('column_source') as string,
      width: 340,
      type: "number",
      valueGetter: (params: GridValueGetterParams) =>
      t(params.row.source),
    },

    { field: "revenue", headerName: t('column_revenue') as string, minWidth: 100, flex: 1, type: "number" },
    { field: "conversions", headerName: t('column_conversions') as string, minWidth: 120, flex: 1, type: "number" },
    { field: "spend", headerName: t('column_spend') as string, type: 'number', minWidth: 100, flex: 1 },
    {
      field: "roas",
      headerName: t('column_roas') as string,
      description: 'This column has a value getter and is not sortable.',
      type: 'number',
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "cpa",
      headerName: t('column_cpa') as string,
      description: 'This column has a value getter and is not sortable.',
      type: 'number',
      minWidth: 100,
      flex: 0.5,
    },
  ];



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