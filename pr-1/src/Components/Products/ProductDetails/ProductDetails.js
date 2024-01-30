import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
      const { id } = useParams()
      const [productadd, setproductadd] = useState([])
      const [countProduct, setCountProduct] = useState(0)
      useEffect(() => {
            let data = JSON.parse(sessionStorage.getItem('ProductData'));
            if (data !== null) {
                  console.log(data);
                  const index = data.findIndex((data) => data.id === id)
                  if (index !== -1) {
                        setproductadd([data[index]]);
                  }
                  console.log(index);
            } else {
                  setproductadd([])
            }


      }, [id])

      return (
            <div className='product-Details'>

                  <div className="container">
                        <div className="row">
                              {productadd.map((val, pos) => {
                                    return (
                                          <>
                                                <div className="w-2 w-md-1">
                                                      <div className="row">
                                                            <div className="w-4 w-xs-1 order-xs-1">
                                                                  <div className="product-img-small">
                                                                        <div className="d-xs-flex">
                                                                              <div className="w-xs-3">
                                                                                    <div className='small-img'>
                                                                                          <img src={val.img} alt="" />
                                                                                    </div>
                                                                              </div>
                                                                              <div className="w-xs-3">
                                                                                    <div className='small-img'>
                                                                                          <img src={val.img} alt="" />
                                                                                    </div>
                                                                              </div>
                                                                              <div className='w-xs-3'>
                                                                                    <div className='small-img'>
                                                                                          <img src={val.img} alt="" />
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="w-75 w-xs-1">
                                                                  <div className="product-img">
                                                                        <img src={val.img} alt="" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="w-2 w-md-1">
                                                      <div className="product-content">
                                                            <h2>{val.title}</h2>
                                                            {
                                                                  [1, 2, 3, 4, 5].map(() => {
                                                                        return (
                                                                              <FaStar className='fastar' />
                                                                        )
                                                                  })
                                                            }
                                                            <div className='price-items d-flex align-center'>
                                                                  <h4>$260</h4>
                                                                  <h3>$300</h3>
                                                                  <span>-40%</span>
                                                            </div>
                                                            <p>{val.description}</p>
                                                            <div className='color'>
                                                                  <p>Select Colors</p>
                                                                  <div className='color-select'>
                                                                        {
                                                                              val.color.map((colr) => {
                                                                                    return (
                                                                                          <span style={{ backgroundColor: colr }}></span>
                                                                                    )
                                                                              })
                                                                        }
                                                                  </div>
                                                            </div>
                                                            <div className='choose'>
                                                                  <p>Choose Size</p>
                                                                  <ul className='choose-select d-flex '>
                                                                        {
                                                                              val.size.map((size) => {
                                                                                    return (
                                                                                          <li><a href="/">{size}</a></li>
                                                                                    )
                                                                              })
                                                                        }
                                                                  </ul>
                                                            </div>
                                                            <div className='d-flex card-add-items align-center'>
                                                                  <div className='d-flex card-add-remove '>
                                                                        <button onClick={() => countProduct > 0 ? setCountProduct(countProduct - 1) : setCountProduct(0)} ><FaMinus /></button>
                                                                        <span>{countProduct}</span>
                                                                        <button onClick={() => setCountProduct(countProduct + 1)}><FiPlus /></button>
                                                                  </div>
                                                                  <button >Add to Cart</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </>
                                    )
                              })}
                        </div>
                  </div>
            </div>
      )
}

export default ProductDetails