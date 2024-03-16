import React from 'react'

import { IoIosArrowForward } from "react-icons/io";

const CardSection = (porps) => {

      return (
            <div className='card-section'>
                  <div className="container">
                        <div className="card-section-items">
                              <ul className='d-flex align-center '>
                                    <li><a href="/">Home</a></li>
                                    <li><IoIosArrowForward className='d-flex' style={{ color: '#626262' }} /></li>
                                    <li><a href="/">Card</a></li>
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default CardSection