import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import InfoBox from '../components/InfoBox'
import { changePageTitle } from '../redux/actions/appInfos'


export default function Home() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePageTitle('Daily update'))
    }, [])

    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <InfoBox title="Daily" number="117" />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Month" number="1170" />
                </Col>
                <Col xs={6} md={4}>
                    <InfoBox title="Total" number="11700" />
                </Col>
            </Row>
        </Container>
    )
}


