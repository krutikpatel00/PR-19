import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import './Selling.css'
import SellingData from '../../../data/SellingsData';
const Selling = () => {
      let Rating = [1, 2, 3, 4, 5]
      const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4, // Number of slides to show at a time
            slidesToScroll: 1,
            responsive: [
                  {
                        breakpoint: 1200,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: false,
                        },
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ],
      };
      return (
            <div className='selling'>
                  <div className="container">
                        <div className="selling-title">
                              <h2>TOP SELLING</h2>
                        </div>
                        <div className="selling-inner">
                              <Slider  {...settings} className=" ">
                                    {
                                          SellingData.map((v, index) => {
                                                return (
                                                      <div className='w-4 selling-items'>
                                                            <img src={v.image} alt="" />
                                                            <h4>{v.title}</h4>
                                                            <div>
                                                                  <div className='d-flex align-center'>
                                                                        {
                                                                              Rating.map((r, i) => {
                                                                                    return (
                                                                                          <>
                                                                                                {
                                                                                                      v.rating > i ?
                                                                                                            <FaStar className='fastar' />
                                                                                                            : <FaRegStar className='faregstar' />
                                                                                                }


                                                                                          </>
                                                                                    )
                                                                              })

                                                                        }
                                                                        <div className='rating'>
                                                                              {v.rating}/5
                                                                        </div>
                                                                  </div >
                                                            </div>
                                                            <h3>${v.prince}</h3>
                                                      </div>
                                                )
                                          })
                                    }
                              </Slider>
                        </div>
                        <div className='view-all'>
                              <a href="/"> View All</a>
                        </div>
                  </div>
            </div>
      )
}

export default Selling