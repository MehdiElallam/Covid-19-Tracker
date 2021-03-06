import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import { changePageTitle } from '../redux/actions/appInfos'

export default function Deaths() {

    const {country : { total } , countryLoading} = useSelector(state => state.countryDetails)
    const [dailyDeaths, setDailyDeaths] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(changePageTitle('Deaths'))
        if(!countryLoading){
            setDailyDeaths(total.todayDeaths)
            setTotalDeaths(total.deaths)
        }
    }, [dispatch, total, countryLoading])


    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <InfoBox title="Daily" number={dailyDeaths} />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Total" number={totalDeaths} />
                </Col>
            </Row>
        </Container>
    )
}
