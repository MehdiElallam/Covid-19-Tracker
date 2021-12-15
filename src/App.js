import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesList from './components/RoutesList';




function App() {
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
                  <Col xs={4} md={3}>
                    <Sidebar />
                  </Col>
                  <Col xs={8} md={9}>
                    <RoutesList />
                  </Col>
              </Row>
          </Container>
          
    </Router>
  );
}

export default App;
