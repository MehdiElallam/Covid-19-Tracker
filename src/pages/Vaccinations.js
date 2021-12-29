import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import LineGraph from '../components/LineGraph'
import { changePageTitle } from '../redux/actions/appInfos'
import helpers from '../utils/helpers'

export default function Vaccinations() {

    const dispatch = useDispatch();
    const vaccinationDetails = useSelector(state => state.vaccinationDetails)    
    const [vaccination, setVaccination] = useState({})
    const [firstDose, setFirstDose] = useState(0)
    const [secondDose, setSecondDose] = useState(0)
    const [thirddDose, setThirddDose] = useState(0)
    const [currentDate] = useState(() => helpers.currentDate())
    
    
    useEffect(() => {
        
        dispatch(changePageTitle('Vaccinations'))
        
        if(!vaccinationDetails.loading){
            setVaccination(vaccinationDetails.vaccination.timeline)
            setVaccination(vaccinationDetails.vaccination.timeline)
            setFirstDose(parseInt(vaccinationDetails.vaccination.timeline[currentDate] / 2.5)) 
            setSecondDose(parseInt(vaccinationDetails.vaccination.timeline[currentDate] / 3 ))
            setThirddDose(parseInt(vaccinationDetails.vaccination.timeline[currentDate] / 6))
        }

    }, [vaccinationDetails.vaccination])


    return (
        
        vaccinationDetails.loading ? <p className="text-center">Loading...</p> :
        <>
            <Row>
                <Col xs={6} md={4}>
                    <InfoBox title="First dose total" number={firstDose} />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Second dose total" number={secondDose} />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Third dose total" number={thirddDose} />
                </Col>
            </Row>
            <hr />
            <Row>
                <LineGraph title='Vaccinations Graph' vaccination={vaccination}  />
            </Row>
        </>
    )
}
