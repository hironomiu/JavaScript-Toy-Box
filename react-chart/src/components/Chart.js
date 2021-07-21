import { Line, Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const backgroundColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
]

const borderColor = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
]

const dt = new Date(2020, 11, 1)

const nextMonthFunc = (dt) => {
  return () => {
    dt.setMonth(dt.getMonth() + 1)
    return dt.getMonth()
  }
}

const nextMonth = nextMonthFunc(dt)
let options = {}

const Chart = () => {
  const [labels, setLabels] = useState([])
  const [dataSet, setDataSet] = useState([])

  useEffect(() => {
    options = {
      responsive: true,
      // maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'サンプルチャート',
        },
        aspectRatio: '1',
      },
    }
    setLabels((label) => [
      ...label,
      ...[
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
        nextMonth() + 1 + ' 月',
      ],
    ])
    setDataSet((data) => [
      ...data,
      ...[
        135.0, 15.0, 131.0, 296.5, 118.0, 212.5, 270.5, 61.5, 117.5, 205.0,
        14.5, 13.0,
      ],
    ])
  }, [])
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset',

        data: dataSet,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  }

  const [title] = useState('東京の降水量の月合計値（mm）(2020年)')

  const divStyle = {
    textAlign: 'center',
    // aspectRatio: "auto 1/1",
    minWidth: '300px',
  }

  const grid = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 4fr 1fr',
  }

  const h1 = {
    color: 'rgb(111 121 130)',
  }

  return (
    <>
      <div style={grid}>
        <div></div>
        <div style={divStyle}>
          <button
            onClick={(e) => {
              e.preventDefault()
              const next = nextMonth()
              setLabels((labels) => [...labels, next + 1 + ' 月'])
              setDataSet((dataSet) => [
                ...dataSet,
                Math.trunc(Math.random() * 301),
              ])
            }}
          >
            add data
          </button>
          <h1 style={h1}>Line:{title}</h1>
          <Line data={data} options={options} />
          <h1 style={h1}>Bar:{title}</h1>
          <Bar data={data} options={options} />
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Chart
