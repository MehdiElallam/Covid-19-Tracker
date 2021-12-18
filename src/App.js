import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesList from './components/RoutesList';
import CountrySelector from './components/CountrySelector'
import { fetchCountryHistorical } from "./redux/actions/countryDetails"
import LineGraph from './components/LineGraph';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCountryHistorical('UK'));
  }, [])


  return (
    <Router>
        <Header title="Covid-19 Tracker" />
          <Container style={{
            maxWidth:'98%'
          }}>
              <Row>
                  <Col xs={12} md={12}>
                    
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={3}>
                    <Sidebar />
                  </Col>
                  <Col xs={12} md={9}>
                    <CountrySelector />
                      <hr/>
                    <RoutesList />
                    <hr/>
                  </Col>
              </Row>
          </Container>
          
    </Router>
  );
}

export default App;
