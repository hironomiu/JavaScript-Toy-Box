import { Line } from "react-chartjs-2"
import { Bar } from "react-chartjs-2"
import { useState } from "react"

const data = {
  // x 軸のラベル
  labels: [
    "1 月",
    "2 月",
    "3 月",
    "4 月",
    "5 月",
    "6 月",
    "7 月",
    "8 月",
    "9 月",
    "10月",
    "11月",
    "12月",
  ],

  datasets: [
    {
      label: "Dataset",
      // データの値
      data: [
        135.0, 15.0, 131.0, 296.5, 118.0, 212.5, 270.5, 61.5, 117.5, 205.0,
        14.5, 13.0,
      ],
      // グラフの背景色
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        // "rgba(201, 203, 207, 0.2)",
      ],
      // グラフの枠線の色
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        // "rgb(201, 203, 207)",
      ],
      // グラフの枠線の太さ
      borderWidth: 1,
    },
  ],
}

const Chart = () => {
  const [title] = useState("東京の降水量の月合計値（mm）(2020年)")
  return (
    <>
      <h1>Line:{title}</h1>
      <Line data={data} />
      <h1>Bar:{title}</h1>
      <Bar data={data} />
    </>
  )
}

export default Chart
