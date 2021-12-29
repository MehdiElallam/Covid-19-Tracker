import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import { changePageTitle } from '../redux/actions/appInfos'


export default function Home() {
    
    const dispatch = useDispatch();

    const { country, countryLoading } = useSelector(state => state.countryDetails)
    const [Deaths, setDeaths] = useState(0)
    const [activeCases, setActiveCases] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [tests, setTests] = useState(0)

    useEffect(() => {
        dispatch(changePageTitle('Daily update'))

        if(!countryLoading){
            setDeaths(country.total.deaths)
            setActiveCases(country.total.active)
            setRecovered(country.total.recovered)
            setTests(country.total.tests)
        }
    }, [country])

    return (
        <Container>
            <Row>
                <Col xs={6} md={3}>
                    <InfoBox title="Active cases" number={activeCases} />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Deaths" number={Deaths} />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Recovered" number={recovered} />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Tests" number={tests} />
                </Col>
            </Row>
        </Container>
    )
}


