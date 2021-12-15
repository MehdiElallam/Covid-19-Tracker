import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'
import { fetchCountries } from "../redux/actions/countryActions"
import { useParams } from 'react-router-dom'

export default function CountrySelector() {

    const dispatch = useDispatch()
    const covid = useSelector(state => state.covid)
    const params = useParams();

    
    useEffect(() => {
        console.log(params)
        dispatch(fetchCountries());
    }, [])

    const countriesList = !covid.loading && covid.countries.map((c,key)=> {
                
        return <option key={key} value={c.country}>{c.country}</option>
    })

    return (
        <Row>
            <Col xs={4} md={2}>
                <Form.Label htmlFor="country"><b>Cases in :</b></Form.Label>
            </Col>
            <Col xs={4} md={3}>
                <Form.Select value={'UK'} aria-label="Your country">
                    {countriesList}
                </Form.Select>
            </Col>
            
        </Row>
    )
}
