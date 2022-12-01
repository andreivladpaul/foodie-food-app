import React, { useEffect, useState } from 'react';
import { getRandomRecipe } from '../../assets/js/apiCall';
import {Row} from 'react-bootstrap';
import Recipe from '../recipe/Recipe';
import { Loading } from '../loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Popular() {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRecipes = () => {
      //check for value saved in Local Storage
      const check = localStorage.getItem('popular');
      if(check) {
        setPopular(JSON.parse(check))
      } else{
        getRandomRecipe().then(res => {
          localStorage.setItem('popular', JSON.stringify(res.data.recipes));
          setPopular(res.data.recipes);
        })
      }
      setLoading(false);
    }

    useEffect(() => {
      getRecipes();
    }, []);
  return (
    <>
      <h2 className='pl-2'>Popular Recipes</h2>
      <Row className="d-flex justify-content-center">
          {loading ? <Loading /> : 
            popular.map( recipe => {
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
