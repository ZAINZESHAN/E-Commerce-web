import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => { // Destructure product prop
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' />{' '}
      {product ? product.category : 'Category Not Found'} <img src={arrow_icon} alt='' /> 
      {product ? product.name : 'Product Not Found'}
    </div>
  );
};      

export default Breadcrum;
