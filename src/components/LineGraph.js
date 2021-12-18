import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'

export default function LineGraph(props) {

    
  const data = {
      labels: props.months,
      datasets: [
        {
          label: 'First dose',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'red',
          borderColor: 'red',
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
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second dose',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
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
          data: [35, 49, 70, 91, 36, 65, 40]
        }
      ]
  };

    return (
        <Row>
            <h2>{props.title}</h2>
            <hr />
            <Line data={data} />
        </Row>
    )
}
