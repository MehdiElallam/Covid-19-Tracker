import React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components';


export default function InfoBox({title, number}) {
    return (
        <Card className='card'>
            <H5>{title}</H5>
            <Small>{number}</Small>
        </Card>
    )
}

const Card = styled.div`
    background: #f9f9f9;
    color: #484848;
    padding: 15px 25px;
`;

const H5 = styled.h5`
    font-size : 14px
`;

const Small = styled.small`
    border-bottom : 1px dotted gray;
    width: 80px;
`;