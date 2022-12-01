import React from 'react';
import './loading.scss';

export const Loading = () => {
  return (
    <div className='loader__container'>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}
