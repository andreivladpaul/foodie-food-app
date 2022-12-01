import React from 'react';
import './recipe.scss'
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
  return (
    <Col lg="3" md="4" className='recipe m-4'>
        <Link to={'/recipe/'+props.id} className='anchor-style'>
          <h4 className="recipe__title">{props.title}</h4>
          <div className="gradient"></div>
          <img src={props.photo} alt={props.title} />
        </Link>
    </Col>
  )
}

export default Recipe;
