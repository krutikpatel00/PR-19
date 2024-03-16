import React from 'react'
import ArrivalsData from '../../../data/ArrivalsData'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import './Arrivals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
const Arrivals = () => {

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
            <div className='arrival'>
                  <div className="container">
                        <div className="arrival-title">
                              <h2>NEW ARRIVALS</h2>
                        </div>
                        <div className="arrival-inner">
                              <Slider  {...settings} className=" ">
                                    {
                                          ArrivalsData.map((v, index) => {
                                                return (
                                                      <div className='w-4 arrival-items'>
                                                            <Link to={`/product/${v.id}`} >
                                                                  <img src={v.img} alt="" />
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
                                                            </Link>
                                                      </div>
                                                )
                                          })
                                    }
                              </Slider>
                        </div>
                        <div className='view-all'>
                              <a href="/"> View All</a>
                        </div>
                        <div className='border'></div>
                  </div>
            </div>
      )
}

export default Arrivals