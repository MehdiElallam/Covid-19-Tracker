import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import CountrySelector from '../components/CountrySelector'


export default function Home() {
    return (
        <Container>
            <Row>
                <h2>Daily update</h2>
            </Row>
            <hr />
            <Row>
                <CountrySelector />
            </Row>
            <hr/>
            <Row>
                <Col xs={6} md={4}>
                    <InfoBox title="Daily" number="117" />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Month" number="1170" />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Total" number="11700" />
                </Col>
            </Row>
        </Container>
    )
}


