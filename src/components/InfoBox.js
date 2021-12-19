import React from 'react'
import styled from 'styled-components';


export default function InfoBox({title, number, pourcentage}) {
    return (
        <Card className='card'>
            <H5>{title}</H5>
            <Small>{number}</Small>
            {pourcentage && <Small>{number}</Small>}
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