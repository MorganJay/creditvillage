import React from "react";
import { Bar, defaults } from "react-chartjs-2";

const CustomChart = ({ width = 150, height = 200, className, data }) => {
  defaults.font.family = "'Montserrat', sans-serif";
  defaults.font.weight = "500";
  defaults.plugins.legend.display = false;
  defaults.scale.ticks.padding = 10;

  return (
    <div className={className}>
      <Bar
        data={data}
        width={width}
        height={height}
        options={{
          title: {
            display: false,
          },
          scales: {
            yAxes: {
              min: 0,
              max: 800,
              grid: {
                borderColor: "transparent",
                borderDash: [5, 10],
                borderWidth: 17,
              },
              ticks: {
                callback: function (value) {
                  if (!(value % 200)) return value;
                },
              },
            },
            xAxes: {
              grid: {
                display: false,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default CustomChart;
