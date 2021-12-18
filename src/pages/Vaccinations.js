import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import LineGraph from '../components/LineGraph'
import { changePageTitle } from '../redux/actions/appInfos'
import { fetchCountryVaccination } from '../redux/actions/countryVaccination'
import helpers from '../utils/helpers'

export default function Vaccinations() {

    const dispatch = useDispatch();
    const vaccinationDetails = useSelector(state => state.vaccinationDetails)
    const [vaccination, setVaccination] = useState({})
    const [firstDose, setFirstDose] = useState(0)
    const [secondDose, setSecondDose] = useState(0)
    const [currentDate] = useState(() => helpers.currentDate())
    
    
    useEffect(() => {
        dispatch(changePageTitle('Vaccinations'))
        !vaccinationDetails.loading && setVaccination(vaccinationDetails.vaccination.timeline)
        !vaccinationDetails.loading && setFirstDose(vaccinationDetails.vaccination.timeline[currentDate])
        !vaccinationDetails.loading && setSecondDose(vaccinationDetails.vaccination.timeline[currentDate] - 1600)
        
    }, [vaccinationDetails])

    return (
        <>
            <Row>
                <Col xs={6} md={3}>
                    <InfoBox title="First dose total" number={firstDose} />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Second dose total" number={secondDose} />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Third dose total" number="11700" />
                </Col>
                <Col xs={6} md={3}>
                    <InfoBox title="Total" number="11700" />
                </Col>
            </Row>
            <hr />
            <Row>
                <LineGraph title='Vaccinations Graph :' months={helpers.monthList()} />
            </Row>
        </>
    )
}
