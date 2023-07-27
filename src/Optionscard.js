import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
function Optionscard({ data }) {
    return (
        <Container>
        <Row>
            {
                data.map(i => (
                    
                       <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                           <Link to={`restaurantview/${i.id}`} style={{textDecoration:'none'}}>
                                <Card className='ms-2 mt-3' >
                                    <Card.Img variant="top" src={i.photograph} />
                                    <Card.Body >
                                        <Card.Title>{i.name}</Card.Title>
                                        <Card.Text style={{fontSize:'small'}}>
                                           {i.address}
                                        </Card.Text>
        
                                    </Card.Body>
                                </Card>
                           </Link>
                       </Col>
                    ))
            }

        </Row>
        </Container>
    )
}

export default Optionscard