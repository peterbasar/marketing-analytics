import React from "react"
/* MUI */
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
/* i18n */
import { useTranslation } from "react-i18next";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";


const PartitionDataTable = () => {
  /* Zustand */
  const partitionData = useDataManagerStore((state) => state.partitionData)
  /* i18n */
  const { t } = useTranslation()

  const columns: GridColDef[] = [
    { field: "date", 
      headerName: t('column_date') as string,
      minWidth: 100,
      flex: 0.8,
      type: "date",
      valueGetter: (params: GridValueGetterParams) => new Date(params.row.date),
    },
    { field:  "source",
      headerName: t('column_source') as string,
      width: 230,
      type: "string",
      valueGetter: (params: GridValueGetterParams) => t(params.row.source),
    },
    { field: "type",
      headerName: t('column_source_type') as string,
      type: 'string',
      minWidth: 120,
      flex: 1,
      valueGetter: (params: GridValueGetterParams) => t(params.row.type),
    },
    { field: "attributed_revenue", headerName: t('column_revenue') as string, minWidth: 100, flex: 0.8, type: "number" },
    { field: "attributed_conversions", headerName: t('column_conversions') as string, minWidth: 120, flex: 0.8, type: "number" },
    { field: "spends", headerName: t('column_spend') as string, type: 'number', minWidth: 100, flex: 0.8 },
    // { field: "partition_id", headerName: t('column_partition_id') as string, type: 'string', minWidth: 120, flex: 1 },
    { field: "optimisation_target",
      headerName: t('column_optimisation_target') as string,
      type: 'string',
      minWidth: 110,
      flex: 1,
      valueGetter: (params: GridValueGetterParams) => t(params.row.optimisation_target), },
  ];


  return (
    <div style={{height: "100%", width: "100%"}}>
      <DataGrid
        rows={partitionData}
        columns={columns}
        getRowId={(row) => {return (row.date + "-" + row.source)}}
        checkboxSelection={false}
      />
    </div>
  );
}
export default PartitionDataTable