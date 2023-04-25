import React, { useContext } from "react";
/* i18n */
import { useTranslation } from "react-i18next";
/* Recharts */
import {
    Tooltip,
    ResponsiveContainer,
    Sankey,
} from "recharts";
/* Zustand */
import { useDataManagerStore } from "Components/DataManager/DataManager.store";
/* Components */
import { ThemeContext } from "Theme/Theme";
import CustomNode from "./CustomNode";
import addSpacesToNumber from "Utils/addSpacesToNumber";


const ConversionsSankeyChart = () => {
  const theme = useContext(ThemeContext)

  /* i18n */
  const { t } = useTranslation()

  /* Zustand */
  const selectedPerformanceReportData = useDataManagerStore((state) => state.selectedPerformanceReportData)

  /* Generate nodes and links */
  // Define first layer
  let nodes: Array<{name: string}> = [{name: t("conversions")}]
  let links: Array<{source: number, target: number, value: number}> = []

  selectedPerformanceReportData.forEach((row, rowIdx) => {
    if (row.conversions > 0){
      nodes.push({name: t(row.source)})
      links.push({
        source: 0,
        target: links.length + 1,
        value: Math.round(row.conversions*100)/100,
      })
    }
  })

  return (
      <ResponsiveContainer width="100%" height="100%">
        <Sankey
          // data={data0}
          data={{
            nodes: nodes,
            links: links,
          }}
          node={
              ({
              ...props
            }) => {return CustomNode({
              ...props,
              nodeColor: theme.hex.secondary,
              textColor: theme.hex.secondary,
            })}
          }
          nodePadding={50}
          margin={{
            left: 30,
            right: 200,
            top: 30,
            bottom: 30,
          }}
          link={{ stroke: theme.hex.tertiary }}
        >
          <Tooltip
              formatter={(value: any, name: any): [string, string] => {
                  return [addSpacesToNumber(value), name]
              }}
          />
        </Sankey>
      </ResponsiveContainer>
  );   
}
export default ConversionsSankeyChart