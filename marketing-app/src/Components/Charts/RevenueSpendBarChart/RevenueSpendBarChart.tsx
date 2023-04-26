import React, { useContext } from "react";
/* i18n */
import { useTranslation } from "react-i18next";
/* Recharts */
import {
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Bar,
    Legend
} from "recharts";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";
/* Components */
import { ThemeContext } from "Theme/Theme";
import addSpacesToNumber from "Utils/addSpacesToNumber";


const RevenueSpendBarChart = () => {
  /* Zustand */
  const selectedPerformanceReportData = useDataManagerStore((state) => state.selectedPerformanceReportData)
  
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()

  /* A. Get filtered data and format it */
  let revenueSpendData: Array<{
    source: string,
    spend: number,
    revenue: number,
  }> = selectedPerformanceReportData.map((row) => {
    return {
      source: t(row.source),
      spend: Math.round(row.spend),
      revenue: Math.round(row.revenue),
    }
  })

  return (
      <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={revenueSpendData}
            margin={{ top: 20, right: 10, bottom: 10, left: 20 }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" fontSize={"small"} />
              <YAxis tickFormatter={(value) => addSpacesToNumber(value)} fontSize={"small"} />
              <Tooltip
                formatter={(value: any, name: any): [string, string] => {
                  return [addSpacesToNumber(value), t(name)]
                }}
              />
              <Legend formatter={(value) => t(value)} />
              <Bar dataKey="spend" fill={theme.hex.secondary} />
              <Bar dataKey="revenue" fill={theme.hex.tertiary} />
          </BarChart>
      </ResponsiveContainer>
  );   
}
export default RevenueSpendBarChart