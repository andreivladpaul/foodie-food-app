import React from 'react';
import Popular from '../../components/popular/Popular';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <Container fluid className='container'>
        <Popular /> 
    </Container>
  )
}