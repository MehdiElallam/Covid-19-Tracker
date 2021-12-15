import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import CountrySelector from '../components/CountrySelector'

export default function Deaths() {
    return (
        <Container>
            <Row>
                <h2>Deaths</h2>
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
            </Row>
        </Container>
    )
}
