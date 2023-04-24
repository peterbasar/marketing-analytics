import React, { useContext } from "react";
/* i18n */
import { useTranslation } from "react-i18next";
/* Recharts */
import {
    BarChart,
    Scatter,
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


const data = [
    {
      "name": "Page A",
      "source": 4000,
      "revenue": 2400
    },
    {
      "name": "Page B",
      "source": 3000,
      "revenue": 1398
    },
    {
      "name": "Page C",
      "source": 2000,
      "revenue": 9800
    },
    {
      "name": "Page D",
      "source": 2780,
      "revenue": 3908
    },
    {
      "name": "Page E",
      "source": 1890,
      "revenue": 4800
    },
    {
      "name": "Page F",
      "source": 2390,
      "revenue": 3800
    },
    {
      "name": "Page G",
      "source": 3490,
      "revenue": 4300
    }
  ]

const RevenueSpendBarChart = () => {
  /* Zustand */
  const getRevenueSpendData = useDataManagerStore((state) => state.getRevenueSpendData)
  const selectedSources = useDataManagerStore((state) => state.selectedSources)
  
  const theme = useContext(ThemeContext)

  /* A. Get rows */
  let revenueSpendData = getRevenueSpendData()

  /* B. Filter out unselected sources */
  revenueSpendData = revenueSpendData.filter((row) => selectedSources.includes(row.source))

  /* C. Translate before passing */
  const { t } = useTranslation()
  revenueSpendData.forEach((item) => {
    item.source = t(item.source)
  })

  return (
      <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={revenueSpendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Legend formatter={(value) => t(value)} />
              <Bar dataKey="spend" fill={theme.hex.secondary} />
              <Bar dataKey="revenue" fill={theme.hex.tertiary} />
          </BarChart>
      </ResponsiveContainer>
  );   
}
export default RevenueSpendBarChart