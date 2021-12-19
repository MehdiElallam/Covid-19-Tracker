import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { Row, Col } from 'react-bootstrap'
import helpers from '../utils/helpers'

export default function LineGraph(props) {

  const [chartData, setChartData] = useState(
    {
      labels: helpers.monthList(),
      datasets: [
        chartOptions('First dose', 'red', []),
        chartOptions('Second dose', 'green', []),
        chartOptions('Third dose', 'blue', [])
      ]
    }
  )

  useEffect(() => {
      props.vaccination && setChartData({
        labels: helpers.monthList(),
        datasets: [
          chartOptions('First dose', '#77c4bf', DoseData(props.vaccination, 1)),
          chartOptions('Second dose', '#009c91', DoseData(props.vaccination, 2)),
          chartOptions('Third dose', '#00413d', DoseData(props.vaccination, 3))
        ]
      })
  
  }, [props.vaccination])
  

    return (
        <Row>
            <h4>{props.title}</h4>
            <hr />
            { props.vaccination && <Line data={chartData} /> }
        </Row>
    )
}

const DoseData = (data, dose) => {
  
  const currentDate = helpers.currentDate();
  const currentMonth = parseInt(helpers.currentDate('month'))
  const graphData = []

  for (let index = 1; index <= currentMonth; index++) {
    
    let thisMonth = helpers.dateByMonth(index);
    let firstDay = helpers.getFirstLastDay(thisMonth).firstDay
    let lastDay = index === currentMonth ? currentDate : helpers.getFirstLastDay(thisMonth).lastDay
    let Dose = dose == 1 ? (data[lastDay] - data[firstDay] ) / 2.5 : dose == 2 ? (data[lastDay] - data[firstDay] ) / 3 : (data[lastDay] - data[firstDay] ) / 6
    
    graphData.push(Dose)
    
  }

  return graphData

}

const chartOptions = (label, color, data) =>{
  return {
    label,
    fill: false,
    lineTension: 0.1,
    backgroundColor: color,
    borderColor: color,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data
  }
}