import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import InfoBox from './InfoBox'


export default function Header({title}) {
    return (
        <>
            <h1>{title}</h1>
            
            <Grid>
                <Row className="show-grid">
                    <InfoBox title="Daily" number="117" />
                    <InfoBox title="Month" number="1170" />
                    <InfoBox title="Total" number="11700" />
                </Row>
            </Grid>
        </>
    )
}
