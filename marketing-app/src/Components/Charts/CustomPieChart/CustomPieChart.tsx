import React, { useContext, useRef, useEffect, useState, useLayoutEffect } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
/* i18n */
import { useTranslation } from 'react-i18next';
/* Components */
import { ThemeContext } from 'Theme/Theme';
import CustomLabel from './CustomLabel';
import addSpacesToNumber from 'Utils/addSpacesToNumber';



interface CustomPieChartInterface {
    data: Array<{
        name: string,
        value: number,
    }>
}


const CustomPieChart = ({data}: CustomPieChartInterface) => {
    /* i18n */
    const { t } = useTranslation()

    /* Keep track of pieContainer container width */
    const [pieContainerWidth, setPieContainerWidth] = useState<number>(1920);
    const pieContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setPieContainerWidth(width);
          });
          if (pieContainerRef && pieContainerRef.current){
            resizeObserver.observe(pieContainerRef.current);
          }

          return () => resizeObserver.disconnect();
    }, [pieContainerRef])

    const theme = useContext(ThemeContext)    
    
    /* Sort data by value */
    data.sort((a, b) => {
        if (a.value < b.value ){
            return 1
        }else if (a.value > b.value){
            return -1
        }else{
            return 0
        }
    })

    return (
        <div ref={pieContainerRef} style={{width: "100%", height: "100%"}}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        nameKey="name"
                        dataKey="value"
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={pieContainerWidth*0.20}
                        isAnimationActive={false}
                        fill={theme.hex.secondary}
                        label={CustomLabel}
                    />
                    <Tooltip
                        formatter={(value: any, name: any): [string, string] => {
                            return [addSpacesToNumber(value), t(name)]
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
export default CustomPieChart