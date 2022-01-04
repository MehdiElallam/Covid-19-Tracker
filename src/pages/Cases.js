import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import { changePageTitle } from '../redux/actions/appInfos'


export default function Cases() {
    
    const countryDetails = useSelector(state => state.countryDetails)
    const [dailyCases, setdailyCases] = useState(0)
    const [totalCases, setTotalCases] = useState(0)
    const [trendMonth, setTrendMonth] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(changePageTitle('Cases'))
        !countryDetails.countryLoading && setdailyCases(countryDetails.country.total.todayCases)
        !countryDetails.countryLoading && setTotalCases(countryDetails.country.total.cases)
        !countryDetails.historicalLoading && setTrendMonth(Math.max(...Object.values(countryDetails.country.historical.timeline.cases)))

 
    }, [dispatch, countryDetails])
    
    
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <InfoBox title="Daily" number={dailyCases} />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Total" number={totalCases} />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Trend of the year" number={trendMonth} />
                </Col>
            </Row>
        </Container>
    )
}
