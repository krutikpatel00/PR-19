import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FiPlus } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa6';

import './Card.css'
import CardSection from './CardSection';
const Card = () => {
      return (
            <>
                  <CardSection card={['Home', 'Card']} />
                  <div className='card'>
                        <div className="container">
                              <div className="card-title">
                                    <h2>Your cart</h2>
                              </div>
                              <div className="row">
                                    <div className="w-60 w-md-1">
                                          <div className="card-items">
                                                <div className="row ">
                                                      <div className="w-1">
                                                            <div className="card-detail">
                                                                  <div className="row align-center">
                                                                        <div className="w-4 w-xs-1">
                                                                              <div className="card-img">
                                                                                    <img src='./Assets/Img/img3.png' alt="" />
                                                                              </div>
                                                                        </div>
                                                                        <div className="w-75 w-xs-1">
                                                                              <div className="card-content">
                                                                                    <h2>Gradient Graphic T-shirt</h2>
                                                                                    <ul>
                                                                                          <li>Size: Large</li>
                                                                                          <li>Color: White</li>
                                                                                    </ul>
                                                                                    <div className='d-flex justify-content-between'>
                                                                                          <h4>$145</h4>
                                                                                          <div className='d-flex align-center card-plus-remove'>
                                                                                                <button><FaMinus /></button>
                                                                                                <span>0</span>
                                                                                                <button><FiPlus /></button>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      
                                                </div>
                                          </div>
                                    </div>
                                    <div className="w-40 w-md-1">
                                          <div className="card-price-totle">
                                                <h4>Order Summary</h4>
                                                <div className='items-subtota d-flex justify-content-between align-cneter'>
                                                      <p>Subtotal</p>
                                                      <span>$456</span>
                                                </div>
                                                <div className='items-discount d-flex justify-content-between align-cneter'>
                                                      <p>Discount (-20%)</p>
                                                      <span>$116</span>
                                                </div>
                                                <div className='items-delivery d-flex justify-content-between align-cneter'>
                                                      <p>Delivery Fee</p>
                                                      <span>$456</span>
                                                </div>
                                                <div className='total-price d-flex justify-content-between align-cneter'>
                                                      <h6>Total</h6>
                                                      <span>$456</span>
                                                </div>
                                                <div className='card-code d-flex'>
                                                      <div className='position-relative w-1'>
                                                            <input type="text" placeholder='Add promo code' />
                                                            <MdOutlineLocalOffer className='MdOutlineLocalOffer' />
                                                      </div>
                                                      <button className='apply'>Apply</button>
                                                </div>

                                                <button className='checkout-btn'>Go to Checkout <FaArrowRight className='FaArrowRight' /></button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Card