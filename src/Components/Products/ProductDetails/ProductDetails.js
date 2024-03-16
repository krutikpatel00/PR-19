import React, { useEffect, useState, } from 'react'
import './ProductDetails.css'
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = ({ ProductSigle, addBagData }) => {



      return (
            <div div className='product-Details' >
                  <div className="container">
                        <div className="row">
                              <div className="w-40 w-md-1">
                                    <div className="row">
                                          <div className="product-img animate__bounceInLeft animate__animated">
                                                <img src={ProductSigle.image} alt="" />
                                          </div>
                                    </div>
                              </div>
                              <div className="w-60 w-md-1">
                                    <div className="product-content animate__bounceInRight animate__animated">
                                          <h2>{ProductSigle.title}</h2>
                                          <span>{ProductSigle.rating?.rate}/5</span>
                                          <p>{ProductSigle.description}</p>

                                          <div className='price-items d-flex align-center' style={{ padding: ' 25px 0 0 0' }}>
                                                <h4>${ProductSigle.price}</h4>
                                                {/* <h3>$300</h3>
                                                <span>-40%</span> */}
                                          </div>
                                          <div style={{ margin: "20px 0 " }}>{ProductSigle.rating?.count > 0 ? <span style={{ color: 'green', padding: '8px 30px', backgroundColor: '#00800021', borderRadius: '50px' }}>Available Stock</span> : <span>Out of Stock</span>}</div>
                                          <div className='d-flex card-add-items align-center'>
                                                <button onClick={() => addBagData()}>Add to Cart</button>
                                          </div>
                                    </div>
                              </div >
                        </div>
                  </div>
            </div >
      )
}

export default ProductDetails