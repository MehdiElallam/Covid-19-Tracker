import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import CountrySelector from '../components/CountrySelector'

export default function Vaccinations() {
    return (
        <Container>
            <Row>
                <h2>Vaccinations</h2>
            </Row>
            <hr />
            <Row>
                <CountrySelector />
            </Row>
            <hr/>
            <Row>
                <Col xs={6} md={3}>
                    <InfoBox title="First dose total" number="117" />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Second dose total" number="1170" />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Third dose total" number="11700" />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Total" number="11700" />
                </Col>
            </Row>
        </Container>
    )
}