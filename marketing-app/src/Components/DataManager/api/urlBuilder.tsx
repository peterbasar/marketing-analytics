import { BACKEND_ENDPOINTS } from "config"


/* Url - Get available partitions  */
export const getListOfPartitionsUrl = (): string => {
    return BACKEND_ENDPOINTS.API
}
/* Url - Get list of sources */
export const getListOfSourcesUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/data/sources" 
}
/* Url - Get partition data */
export const getPartitionDataUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/data" 
}
/* Url - Get performance report */
export const getPerformanceReportUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/report/performance" 
}

/* Url - Get summary statistics */
export const getSummaryStatisticsUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/totals" 
}
/* Url - Get revenue */
export const getRevenueUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/totals/revenue" 
}
/* Url - Get conversions */
export const getConversionsUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/totals/conversions" 
}
/* Url - Get spend */
export const getSpendUrl = (partitionId: string): string => {
    return BACKEND_ENDPOINTS.API + partitionId + "/totals/spend" 
}