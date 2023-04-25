import React from "react";
import {
    Rectangle,
    Layer,
} from "recharts";
import addSpacesToNumber from "Utils/addSpacesToNumber";


export interface CustomNodeInterface {
    x: number,
    y: number,
    width: number,
    height: number,
    index: number,
    payload: { name: string, value: number },
    containerWidth: number,
    textColor: string,
    nodeColor: string,
}

const CustomNode = ({
    x,
    y,
    width,
    height,
    index,
    payload,
    containerWidth,
    textColor,
    nodeColor,
  }: CustomNodeInterface) => {
    const isOut = x + width + 6 > containerWidth;
    return (
      <Layer key={`CustomNode${index}`}>
        <Rectangle
          x={x}
          y={y}
          width={width}
          height={height}
          fill={nodeColor}
          fillOpacity="1"
        />
        <text
          textAnchor={isOut ? 'end' : 'start'}
          x={isOut ? x - 6 : x + width + 6}
          y={y + height / 2}
          fontSize="10"
        >
          { payload.name }
        </text>
        <text
          textAnchor={isOut ? 'end' : 'start'}
          x={isOut ? x - 6 : x + width + 6}
          y={y + height / 2 + 13}
          fontSize="10"
          strokeOpacity="0.5"
        >
          {`${addSpacesToNumber(Math.round(payload.value*100)/100)}k` }
        </text>
      </Layer>
    );
}
export default CustomNode