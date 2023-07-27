import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

function Singleview() {
  const [allUser, setUser] = useState([])

  const params = useParams()
  const getUser = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => {
      setUser(data.restaurants);
    })
  }
  console.log(allUser);


  useEffect(() => {

    //console.log(params.id);
    getUser()

  }, [])
  const singleuser = allUser.find(i => i.id == params.id)
  //console.log(singleuser);


  return (
    <Container>
      <div className='text-center'>
        {
          singleuser ?
            <div>

              <Row>
                <Col><img className='mt-4 ' style={{ height: "500px", width: "500px" }} src={singleuser.photograph} alt="" /></Col>
                <Col>
                  <div className='mt-4'>
                    <ListGroup className='p-5'>
                      <ListGroup.Item >Name of the hotel : <span className='text-warning'>{singleuser.name}</span></ListGroup.Item>
                      <ListGroup.Item>Cuisine : <span className='text-warning'>{singleuser.cuisine_type}</span></ListGroup.Item>
                      <ListGroup.Item >Address : <span className='text-warning'>{singleuser.address}</span></ListGroup.Item>
                      <ListGroup.Item >Neighbourhood : <span className='text-warning'>{singleuser.neighborhood}</span></ListGroup.Item>
                    </ListGroup>
                  </div>

                </Col>
              </Row>


            </div> : ''}


      </div>
    </Container>
  )
}

export default Singleview