import React, { useEffect} from 'react'
import './App.scss'
import {useDispatch } from 'react-redux'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesList from './routes';
import CountrySelector from './components/CountrySelector'
import { fetchCountryHistorical } from "./redux/actions/countryDetails"


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchCountryHistorical());
  }, [])


  return (
    <Router>
        <Header title="Covid-19 Tracker" />
          <Container style={{
            maxWidth:'98%',
            padding : '20px',
            margin : 0
          }}>
              
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
