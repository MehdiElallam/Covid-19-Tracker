import React from 'react'
import styled from 'styled-components';


export default function Header({title}) {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <p>The official UK government website for data and insights on coronavirus (COVID-19).</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #000;
    width: 100%;
    margin-bottom : 20px;
    padding: 15px 25px;
    color: #FFF;
`;