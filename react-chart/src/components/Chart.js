import { Line, Bar } from "react-chartjs-2"
import { useState } from "react"

const nextMonth = (dt) => {
  console.log("dt s:", dt)
  dt.setMonth(dt.getMonth() + 1)
  console.log("dt e:", dt)
  return dt.getMonth()
}

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "サンプルチャート",
    },
  },
}

const Chart = () => {
  const dt = new Date(2021, 0, 1)

  const [labels, setLabels] = useState([
    dt.getMonth() + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
    nextMonth(dt) + 1 + " 月",
  ])

  const [dataSet, setDataSet] = useState([
    135.0, 15.0, 131.0, 296.5, 118.0, 212.5, 270.5, 61.5, 117.5, 205.0, 14.5,
    13.0,
  ])
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        data: dataSet,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 2,
      },
    ],
  }

  const [title] = useState("東京の降水量の月合計値（mm）(2020年)")
  const divStyle = {
    display: "grid",
    textAlign: "center",
    width: "780px",
  }
  const grid = {
    display: "grid",
    gridTemplateColumns: "400px 800px 200px",
  }
  return (
    <>
      <div style={grid}>
        <div></div>
        <div style={divStyle}>
          <button
            onClick={() => {
              setLabels((labels) => [...labels, nextMonth(dt) + 1 + " 月"])
              setDataSet((dataSet) => [...dataSet, 200])
            }}
          >
            add data
          </button>
          <h1>Line:{title}</h1>
          <Line data={data} options={options} />
          <h1>Bar:{title}</h1>
          <Bar data={data} options={options} />
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Chart
