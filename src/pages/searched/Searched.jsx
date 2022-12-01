import React, { useEffect, useState } from 'react';
import {getRecipes} from '../../assets/js/apiCall';
import { useParams} from 'react-router-dom';
import { Loading } from '../../components/loading/Loading';
import {Row} from 'react-bootstrap';
import Recipe from '../../components/recipe/Recipe';

const Searched = () => {
    const [searched, setSearched] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const getSearched = () => {
        getRecipes(params.input).then( res => {
          const results = res.data.results;
          if(results.length === 0){
            alert('Recipes not found, try again')
          }else {
            setSearched(results);
            setLoading(false);
          }
          })
        }

    useEffect( () => {
        getSearched();
    },[params.input])

  return (
    <Row className="d-flex justify-content-center">
          {loading ? <Loading /> : 
            searched.map( recipe => {
              return(<Recipe key={recipe.id} 
                title={recipe.title}
                photo={recipe.image}
                id={recipe.id}/>)
              })
            }
      </Row>
  )
}

export default Searched
