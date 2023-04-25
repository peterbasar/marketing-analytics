import React, { useContext } from "react"
/* Components */
import { performanceReportItemInterface } from "Components/DataManager/DataManager.interfaces";
/* MUI */
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
/* i18n */
import { useTranslation } from "react-i18next";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const PerformanceReportTable = () => {
  /* Zustand */
  const performanceReportData = useDataManagerStore((state) => state.performanceReportData)
  const selectedSources = useDataManagerStore((state) => state.selectedSources)
  const toggleSources = useDataManagerStore((state) => state.toggleSources)
  /* i18n */
  const { t } = useTranslation()

  const columns: GridColDef[] = [
    { field:  "source",
      headerName: t('column_source') as string,
      width: 240,
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
        rows={performanceReportData}
        columns={columns}
        getRowId={(row) => {return row.source}}
        onRowSelectionModelChange={(model) => {toggleSources(model as string[])}}
        rowSelectionModel={selectedSources}
        checkboxSelection
      />
    </div>
  );
}
export default PerformanceReportTable