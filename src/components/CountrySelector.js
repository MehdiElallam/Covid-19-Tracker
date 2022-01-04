import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'
import { fetchWorldCountries } from "../redux/actions/countries"
import { fetchCountryData } from "../redux/actions/countryDetails"
import { fetchCountryHistorical } from "../redux/actions/countryDetails"
import { fetchCountryVaccination } from "../redux/actions/countryVaccination"
import { changeDefaultCountryCode } from "../redux/actions/appInfos"

export default function CountrySelector() {

    const dispatch = useDispatch()
    const worldCountries = useSelector(state => state.worldCountries)
    const { countryCode, title } = useSelector(state => state.app.infos)
    
    useEffect(() => {

        dispatch(fetchWorldCountries());
        dispatch(fetchCountryData(countryCode));
        dispatch(fetchCountryVaccination(countryCode))

    }, [dispatch, countryCode])

    const countriesList = worldCountries.loading ? <option>Loading...</option> : worldCountries.countries.map((c,key)=> {
                
        return <option key={key} value={c.country}>{c.country}</option>
    })

    const fetchCountryDetails = (e) => {
        
        const countryCode = e.target.value;
        
        dispatch(changeDefaultCountryCode(countryCode))
        
        dispatch(fetchCountryData(countryCode))        
        dispatch(fetchCountryHistorical(countryCode))
        dispatch(fetchCountryVaccination(countryCode))

    }

    return (
        <div className='counter-selector-container'>
            <Row>
                <h2>{title}</h2>
            </Row>
            <hr />
            <Row>
                <Col xs={6} md={4}>
                    <Form.Label htmlFor="country"><b>{title} in :</b></Form.Label>
                </Col>
                <Col xs={6} md={4}>
                    <Form.Select id="countries__list" value={countryCode} onChange={fetchCountryDetails} aria-label="Country">
                        {countriesList}
                    </Form.Select>
                </Col>
                
            </Row>
        </div>
    )
}
