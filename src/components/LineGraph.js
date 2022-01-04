import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import 'chart.js/auto'
import { Row } from 'react-bootstrap'
import helpers from '../utils/helpers'

export default function LineGraph({title, vaccination}) {

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

      vaccination && setChartData({
        labels: helpers.monthList(),
        datasets: [
          chartOptions('First dose', '#77c4bf', DoseData(vaccination, 1)),
          chartOptions('Second dose', '#009c91', DoseData(vaccination, 2)),
          chartOptions('Third dose', '#00413d', DoseData(vaccination, 3))
        ]
      })


  
  }, [vaccination])
  

    return (
        <Row>
            <h4>{title}</h4>
            <hr />
            { vaccination && <Line data={chartData} /> }
        </Row>
    )
}

const DoseData = (data, dose) => {
  
  const graphData = []

  if(data){
    const currentDate = helpers.currentDate();
    const currentMonth = parseInt(helpers.currentDate('month'))

  
    for (let index = 1; index <= currentMonth; index++) {
      
      let thisMonth = helpers.dateByMonth(index);
      let firstDay = helpers.getFirstLastDay(thisMonth).firstDay 

      let lastDay = index === currentMonth ? currentDate : helpers.getFirstLastDay(thisMonth).lastDay
      let Dose = dose === 1 ? (data[lastDay] - data[firstDay] ) / 2.5 : dose === 2 ? (data[lastDay] - data[firstDay] ) / 3 : (data[lastDay] - data[firstDay] ) / 6
      
      graphData.push(Dose)
      
    }
  }
  
  // console.log("graphData", graphData)
  return graphData

}

const chartOptions = (label, color, data) =>{
  return {
    label,
    fill: false,
    lineTension: 0.1,
    backgroundColor: color,
    borderColor: color,
    data
  }
}