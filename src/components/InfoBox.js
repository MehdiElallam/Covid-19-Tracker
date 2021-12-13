import React from 'react'

export default function InfoBox({title, number}) {
    return (
        <>
            <Col xs={6} md={4}>
                <h3>{title}</h3>
                <h3>{number}</h3>
            </Col>
        </>
    )
}
