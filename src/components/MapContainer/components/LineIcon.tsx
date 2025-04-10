import React from "react";
import mapLineColours from "../../../helper/mapLineColours";

interface HorizontalConnectorProps {
  startX: number;
  startY: number;
  length?: number;
  linePrefix: string;
  stationNumber: string;
  title: string;
}

export default function LineIcon({
  startX,
  startY,
  linePrefix,
  stationNumber,
  title,
}: HorizontalConnectorProps) {
  return (
    <g>
      <title>{title}</title>
      <rect
        x={startX}
        y={startY}
        width={40}
        height={40}
        fill="white"
        stroke={mapLineColours(linePrefix)}
        strokeWidth={2}
        rx={10}
      ></rect>
      <text x={startX + 15} y={startY + 15} style={{ fontSize: "11px" }}>
        {linePrefix}
      </text>
      <text
        x={startX + 11}
        y={startY + 33}
        style={{ fontSize: "16px", fontWeight: 600 }}
        fontWeight={500}
      >
        {stationNumber}
      </text>
    </g>
  );
}
