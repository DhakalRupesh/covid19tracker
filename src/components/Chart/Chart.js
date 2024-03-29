import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
import "./Chart.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const FetchDailyAPI = async () => {
      // setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    // FetchDailyAPI();
  });

  const series = [
    {
      name: "Cases",
      data: dailyData.map(({ cases }) => cases),
    },
    {
      name: "Recovered",
      data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
    },
    {
      name: "Deaths",
      data: dailyData.map(({ deaths }) => deaths),
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/22/20",
        "2/1/20",
        "2/15/20",
        "3/1/20",
        "3/15/20",
        "4/1/20",
        "4/15/20",
        "5/1/20",
        "5/7/20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <>
      <div className="chartContainer">
        <h3>COVID-19 Chart</h3>
        <ApexChart
          className="apChart"
          options={options}
          series={series}
          type="area"
          height={350}
        />
        <ApexChart
          className="apChart1"
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default Chart;
