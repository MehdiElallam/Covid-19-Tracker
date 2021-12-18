import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'
import { fetchWorldCountries } from "../redux/actions/countries"
import { fetchCountryData } from "../redux/actions/countryDetails"
import { fetchCountryHistorical } from "../redux/actions/countryDetails"
import { fetchCountryVaccination } from "../redux/actions/countryVaccination"

import { useParams } from 'react-router-dom'

export default function CountrySelector() {

    const dispatch = useDispatch()
    const worldCountries = useSelector(state => state.worldCountries)
    const app = useSelector(state => state.app)
    const [defaultCountry, setdefaultCountry] = useState('UK')
    const params = useParams();

    useEffect(() => {
        dispatch(fetchWorldCountries());
        dispatch(fetchCountryData('UK'));
        dispatch(fetchCountryVaccination('UK'))

    }, [dispatch])

    const countriesList = worldCountries.loading ? <option>Loading...</option> : worldCountries.countries.map((c,key)=> {
                
        return <option key={key} value={c.country}>{c.country}</option>
    })

    const fetchCountryDetails = (e) => {
        
        const countryCode = e.target.value;
        dispatch(fetchCountryData(countryCode))        
        setdefaultCountry(countryCode)
        fetchCountryHistorical(countryCode)
        dispatch(fetchCountryVaccination(countryCode))

    }

    return (
        <>
            <Row>
                <h2>{app.infos.title}</h2>
            </Row>
            <hr />
            <Row>
                <Col xs={6} md={4}>
                    <Form.Label htmlFor="country"><b>{app.infos.title} in :</b></Form.Label>
                </Col>
                <Col xs={6} md={4}>
                    <Form.Select value={defaultCountry} onChange={fetchCountryDetails} aria-label="Country">
                        {countriesList}
                    </Form.Select>
                </Col>
                
            </Row>
        </>
    )
}
