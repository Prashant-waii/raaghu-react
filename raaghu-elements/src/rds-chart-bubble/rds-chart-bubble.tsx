import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-bubble.scss";

export interface RdsBubbleChartProps {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
  chartdata: any[],
  chartWidth: number,
  chartStyle:string,
}

const RdsBubbleChart = (props: RdsBubbleChartProps) => {
 const CanvasId = "myChart";
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const lineCanvas = new Chart(ctx, {
      type: "bubble",
      data: {
        labels: props.chartLabels,
        datasets:props.chartDataSets
      },
      options: props.chartOptions,
    });
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsBubbleChart;
      