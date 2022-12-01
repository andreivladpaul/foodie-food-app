import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import { getRecipes } from '../../assets/js/apiCall';
import {Row} from 'react-bootstrap';
import Recipe from '../../components/recipe/Recipe';
import { Loading } from '../../components/loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(true);
  let params = useParams();

  function getCategoryRecipes(params) {
    let type = params.type;
    getRecipes(type).then(res => {
      if(res.data.results.length === 0) {
        <p>No results found!</p>
      } else {
        setCuisine(res.data.results);
        setLoading(false);
      }
    })
  }

  useEffect(() => {
    getCategoryRecipes(params);
  },[params.type])
  return (
    <>
      <h2 className='pl-2 d-flex flex-column align-items-center'>{params.type}</h2>
      <Row className="d-flex justify-content-center">
          {loading ? <Loading /> : 
            cuisine.map( recipe => {
              return(<Recipe key={recipe.id} 
                title={recipe.title}
                photo={recipe.image}
                id={recipe.id}/>)
              })
            }
      </Row>
    </>
  )
}

export default Cuisine;
