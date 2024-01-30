import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import CustomrsData from '../../../data/CustomrsData'
import './Reviews.css'
import { FaStar, FaCheckCircle } from 'react-icons/fa';

const Reviews = () => {
      const star = [1, 2, 3, 4, 5]
      return (
            <div className='reviews'>
                  <div className="container">
                        <div className='type-list row align-center'>
                              <div className="w-3">
                                    <div className='list-items'>
                                          <p>Product Details</p>
                                    </div>
                              </div>
                              <div className="w-3">
                                    <div className='list-items'>
                                          <p>Rating & Reviews</p>
                                    </div>
                              </div>
                              <div className="w-3">
                                    <div className='list-items'>
                                          <p>FAQs</p>
                                    </div>
                              </div>
                        </div>

                        <div className='all-reviews'>
                              <div className="row justify-content-between">
                                    <div className='all-reviews-items d-flex align-center'>
                                          <h4>All Reviews</h4>
                                          <p>(451)</p>
                                    </div>
                                    <div className='all-reviews-items d-flex align-center'>
                                          <a href="/" className='vscsettings'><VscSettings /></a>
                                          <div className='position-relative'>
                                                <select name="" id="" >
                                                      <option value="">Latest</option>
                                                </select>
                                                <IoIosArrowDown className='ioiosarrowdown' />
                                          </div>
                                          <a href="/" className='Write-riview'>Write a Review</a>
                                    </div>
                              </div>
                        </div>
                        <div className='reviews-inner'>
                              <div className="row">
                                    {
                                          CustomrsData.map((items, index) => {
                                                return (
                                                      <div className='w-2 w-sm-1'>
                                                            <div key={index} className="coustomrs-items">
                                                                  {star.map((item, index) => (
                                                                        <FaStar key={index} className="fastar" />
                                                                  ))}
                                                                  <div className="d-flex align-center">
                                                                        <h4>{items.title}</h4>
                                                                        <FaCheckCircle className="facheckcircle" />
                                                                  </div>
                                                                  <p>{items.description}</p>
                                                                  <span className='reviews-date'>{items.data}</span>
                                                            </div>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Reviews