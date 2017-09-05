import React, { Component } from 'react';
import './styles.css';
import ProductAPI from '../../db'


const Detailed = (props) => {
  const product = ProductAPI.get(
    props.match.params.id
  );
  if (!product) {
    return <div>Sorry, but the product was not found</div>
  }
  return (
    <section className="content">
      <div className="container">
        <div className="row item">
          <div className="col-md-6">
            <img className="item-img" src={product.img} alt="" />
          </div>
          <div className="col-md-6">
            <div className="item-description">
              <h2 className="item-description__title">{product.name}</h2>
              <p className="item-description__txt"><strong>Размеры стола:</strong> {product.size} мм</p>
              <p className="item-description__txt"><strong>Материал:</strong> {product.desc}</p>
              <span className="price">цена: <strong> {product.price} MDL</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Detailed;


