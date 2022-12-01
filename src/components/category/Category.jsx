import React from 'react';
import './category.scss';
import { NavLink } from 'react-router-dom';
import {GiNoodles, GiFullPizza, GiHamburger} from 'react-icons/gi';


const Category = () => {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center m-2'>
            <NavLink to = {'/cuisine/Italian'} className='anchor-style'>
                <div className='d-flex flex-column justify-content-center align-items-center me-4 single-category'>
                    <GiFullPizza className='category-icon'/>
                    <h5>Italian</h5>
                </div>
            </NavLink>
            <NavLink to = {'/cuisine/American'} className='anchor-style'>
                <div className='d-flex flex-column justify-content-center align-items-center me-4 single-category'>
                    <GiHamburger className='category-icon'/>
                    <h5>American</h5>
                </div>
            </NavLink>
            <NavLink to = {'/cuisine/Thai'} className='anchor-style'>
                <div className='d-flex flex-column justify-content-center align-items-center me-4 single-category'>
                    <GiNoodles className='category-icon'/>
                    <h5>Thai</h5>
                </div>
            </NavLink>
        </div>
    </>
  )
}
export default Category
