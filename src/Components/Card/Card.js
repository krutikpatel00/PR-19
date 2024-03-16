import React, { useEffect, useState } from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FiPlus } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa6';
import { IoCloseSharp } from "react-icons/io5";

import './Card.css'
import CardSection from './CardSection';

const Card = () => {


      const [cardData, setCardData] = useState([])
      const [Subtotal, setSubtotal] = useState(0)


      useEffect(() => {
            getItems()
      }, [setCardData, setSubtotal, Subtotal])
      const getItems = () => {
            let data = JSON.parse(localStorage.getItem('BagItem'));
            setCardData(data ? data : [])
            if (data) {
                  let count = data.reduce((previous, current) => {
                        return previous + current.price * current.quantity;
                  }, 0)
                  console.log(count);
                  setSubtotal(Math.ceil(count))
            }
      }

      const CountDecrement = (id) => {
            const updatedCardData = cardData.map(item => {
                  if (item.id === id && item.quantity > 0) {
                        return { ...item, quantity: item.quantity - 1 };
                  }
                  return item;
            });
            setCardData(updatedCardData);
            localStorage.setItem('BagItem', JSON.stringify(updatedCardData));
            getItems()

      };

      const CountIncrement = (id) => {
            const updatedCardData = cardData.map(item => {
                  if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                  }
                  return item;
            });
            setCardData(updatedCardData);
            localStorage.setItem('BagItem', JSON.stringify(updatedCardData));
            getItems()

      };

      const cardRemove = (pos) => {
            cardData.splice(pos, 1)
            setCardData(cardData)
            localStorage.setItem('BagItem', JSON.stringify(cardData));
            getItems()
      }
      console.log(cardData);
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

                                                      {
                                                            cardData.map((items, pos) => {
                                                                  return (
                                                                        <div className="w-1">
                                                                              <div className="card-detail position-relative">
                                                                                    <IoCloseSharp className='IoCloseSharp' onClick={() => cardRemove(pos)} />
                                                                                    <div className="row align-center">
                                                                                          <div className="w-4 w-xs-1">
                                                                                                <div className="card-img">
                                                                                                      <img src={items.image} alt="" />
                                                                                                </div>
                                                                                          </div>
                                                                                          <div className="w-75 w-xs-1">
                                                                                                <div className="card-content">
                                                                                                      <h2 style={{ textTransform: 'capitalize' }}>{items.title}</h2>

                                                                                                      <div className='d-flex justify-content-between'>
                                                                                                            <h4>${items.price}</h4>
                                                                                                            <div className='d-flex align-center card-plus-remove'>
                                                                                                                  <button onClick={(e) => CountDecrement(items.id)}><FaMinus /></button >
                                                                                                                  <span>{items.quantity}</span>
                                                                                                                  <button onClick={() => CountIncrement(items.id)}><FiPlus /></button>
                                                                                                            </div>
                                                                                                      </div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  )
                                                            })
                                                      }


                                                </div>
                                          </div>
                                    </div>
                                    <div className="w-40 w-md-1">
                                          <div className="card-price-totle">
                                                <h4>Order Summary</h4>
                                                <div className='items-subtota d-flex justify-content-between align-cneter'>
                                                      <p>Subtotal</p>
                                                      <span>${Subtotal}</span>
                                                </div>
                                                <div className='items-discount d-flex justify-content-between align-cneter'>
                                                      <p>Discount (-20%)</p>
                                                      <span>${Subtotal * 20 / 100}</span>
                                                </div>
                                                <div className='items-delivery d-flex justify-content-between align-cneter'>
                                                      <p>Delivery Fee</p>
                                                      <span>$2</span>
                                                </div>
                                                <div className='total-price d-flex justify-content-between align-cneter'>
                                                      <h6>Total</h6>
                                                      <span>${Subtotal - (Subtotal * 20 / 100) - 2}</span>
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