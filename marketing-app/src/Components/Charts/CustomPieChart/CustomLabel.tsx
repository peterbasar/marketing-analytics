export interface CustomLabelInterface {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
    name: string;
    fill: string;
}
  

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: CustomLabelInterface) => {
    const radius = outerRadius + 40;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    if (Math.round(percent * 100) === 0){
        return (<></>)
    }

    return (
      <text x={x} y={y} textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
};
export default CustomLabel
