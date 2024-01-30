import React, { useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import './Casual.css'
import FilterData from '../../data/FillterData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ArrivalsData from '../../data/ArrivalsData';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa6';


function valuetext(value) {
      return `${value}°C`;
}
const Casual = () => {
      const [value, setValue] = React.useState([20, 37]);

      const handleChange = (event, newValue) => {
            setValue(newValue);
      };
      const Rating = [1, 2, 3, 4, 5]

      const [activeItem, setActiveItem] = useState(false);
      const handleItemClick = (e) => {

            setActiveItem(!activeItem);
      }

      return (
            <div className='casual '>
                  <div className="container">
                        <div className="row position-md-relative">
                              <div className="w-4 w-md-1">
                                    <div className={`casual-fillter ${activeItem === true ? 'casual-toggle-true' : 'casual-toggle-false'}`} >
                                          <div className='filters d-flex justify-content-between align-center'>
                                                <h2>Filters</h2>
                                                <VscSettings className='vscsettings' onClick={() => handleItemClick()} />
                                          </div>
                                          <div>
                                                <ul className='product'>
                                                      {
                                                            FilterData[0].product.map((items, pos) => {
                                                                  return (
                                                                        <li className='d-flex justify-content-between align-center'>
                                                                              <a href="javscript:void()">{items}</a>
                                                                              <IoIosArrowForward />
                                                                        </li>
                                                                  )
                                                            })
                                                      }
                                                </ul>
                                                <div className='price'>
                                                      <div className=' d-flex justify-content-between align-center '>
                                                            <h2>Price</h2>
                                                            <IoIosArrowUp />
                                                      </div>
                                                      <Slider
                                                            getAriaLabel={() => 'Temperature range'}
                                                            value={value}
                                                            onChange={() => handleChange()}
                                                            valueLabelDisplay="auto"
                                                            getAriaValueText={valuetext}
                                                      />
                                                </div>
                                                <div className="colors">
                                                      <div className=' d-flex justify-content-between align-center '>
                                                            <h2>Colors</h2>
                                                            <IoIosArrowUp />
                                                      </div>
                                                      <ul className='row'>
                                                            {
                                                                  FilterData[0].color.map((val, pos) => {
                                                                        return (
                                                                              <li className='w-5'>
                                                                                    <span className='color-items' style={{ background: val }}></span>
                                                                              </li>
                                                                        )
                                                                  })
                                                            }
                                                      </ul>
                                                </div>
                                                <div className='size'>
                                                      <div className=' d-flex justify-content-between align-center '>
                                                            <h2>Size</h2>
                                                            <IoIosArrowUp />
                                                      </div>
                                                      <ul className='row'>
                                                            {FilterData[0].size.map((val, pos) => {
                                                                  return (
                                                                        <li>
                                                                              <a href="/"> {val}</a>
                                                                        </li>
                                                                  )
                                                            })}
                                                      </ul>
                                                </div>
                                                <div className='dress-style'>
                                                      <div className=' d-flex justify-content-between align-center '>
                                                            <h2>Dress Style</h2>
                                                            <IoIosArrowUp />
                                                      </div>
                                                      <ul className=''>
                                                            {FilterData[0].dressStyle.map((val, pos) => {
                                                                  return (
                                                                        <li className=' d-flex justify-content-between align-center'>
                                                                              <a href="/"> {val}</a>
                                                                              <IoIosArrowForward />
                                                                        </li>
                                                                  )
                                                            })}
                                                      </ul>

                                                </div>
                                                <button className='apply-filter'>Apply Filter</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="w-75 w-md-1">
                                    <div className="casual-items">
                                          <div className='casual-title d-flex justify-content-between align-center'>
                                                <h4>Casual</h4>
                                                <VscSettings className='vscsettings' onClick={() => handleItemClick()} />
                                                <div className='d-md-none d-flex align-center'>
                                                      <p>Showing 1-10 of 100 Products</p>
                                                      <div className='casual-option'>
                                                            <label htmlFor="">Sort by :</label>
                                                            <select name="" id="">
                                                                  <option value=""> Most Popular</option>
                                                            </select>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="casual-main">
                                                <div className="row">
                                                      {
                                                            ArrivalsData.map((data, index) => {
                                                                  return (
                                                                        <div className='w-3 arrival-items'>
                                                                              <Link to='/product'>
                                                                                    <img src={data.image} alt="" />
                                                                                    <h4>{data.title}</h4>
                                                                                    <div>
                                                                                          <div className='d-flex align-center'>
                                                                                                {
                                                                                                      Rating.map((r, i) => {
                                                                                                            return (
                                                                                                                  <>
                                                                                                                        {
                                                                                                                              data.rating > i ?
                                                                                                                                    <FaStar className='fastar' />
                                                                                                                                    : <FaRegStar className='faregstar' />
                                                                                                                        }
                                                                                                                  </>
                                                                                                            )
                                                                                                      })

                                                                                                }
                                                                                                <div className='rating'>
                                                                                                      {data.rating}/5
                                                                                                </div>
                                                                                          </div >
                                                                                    </div>
                                                                                    <h3>${data.prince}</h3>
                                                                              </Link>
                                                                        </div>
                                                                  )
                                                            })
                                                      }
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Casual