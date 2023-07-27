import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Optionscard from './Optionscard'

function Home() {
    const [restaurants,setrestaurants]=useState([])
    const fetchdetails = async () => {
        var result = await fetch('/restaurants.json')
        result.json().then(data => { setrestaurants(data.restaurants); })
    }
    console.log(restaurants);
    useEffect(() => {
        fetchdetails()
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <Optionscard data={restaurants}></Optionscard>
                </Col>
            </Row>
        </Container>
    )
}

export default Home