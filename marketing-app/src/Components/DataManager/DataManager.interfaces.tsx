export interface paritionInterface {
  id: string,
  brand: string,
  country: string,
}

export interface partitionDataItemInterface {
  date: string,
  source: string,
  attributed_conversions: string,
  attributed_revenue: string,
  type: string,
  spends: number,
  partition_id: string,
  optimisation_target: "revenue" | "conversions",
}

export interface performanceReportItemInterface {
  source: string,
  revenue: number,
  conversions: number,
  spend: number,
  roas: number,
  cpa: number,
}