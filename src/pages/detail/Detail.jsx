import React, { useEffect, useState } from 'react';
import './detail.scss';
import {getDeatil} from '../../assets/js/apiCall'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import { Loading } from '../../components/loading/Loading';


const Detail = () => {
    const [details, setDetails] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState(true);

    const getRecipeDetils = () => {
        getDeatil(params.id).then( res => {
            setDetails(res.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getRecipeDetils();
    },[params.id])
    
  return (<>
        {loading ? <Loading /> : 
            <>
                <Row className='details'>
                    <h2>{details.title}</h2>
                </Row>
                <Row className='d-flex details'>
                    <Col lg='6'>
                        <img src={details.image} alt={details.title} />
                    </Col>
                    <Col lg='6'>
                        <p dangerouslySetInnerHTML={{ __html:details.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html:details.instructions }}></p>
                    </Col>
                </Row>
            </>
        }
        </>)
}

export default Detail
