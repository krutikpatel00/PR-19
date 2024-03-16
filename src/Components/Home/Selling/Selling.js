import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import './Selling.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Selling = () => {
      const [ProductData, setProudctData] = useState([])

      useEffect(() => {
            axios.get('https://fakestoreapi.com/products')
                  .then((res) => {
                        setProudctData(res.data)
                  })
                  .catch((err) => {
                        console.log('error');
                  })
      }, [setProudctData])
      console.log(ProductData);

      let Rating = [1, 2, 3, 4, 5]
      const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
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
                                          ProductData.map((v, index) => {
                                                return (
                                                      <div className='w-4 selling-items'>
                                                            <img src={v.image} alt="" />
                                                            <h4><Link to={'/product/' + v.id}>{v.title}</Link></h4>
                                                            <div>
                                                                  <div className='d-flex align-center'>
                                                                        {
                                                                              Rating.map((r, i) => {
                                                                                    return (
                                                                                          <>
                                                                                                {
                                                                                                      Math.round(v.rating.rate) > i ?
                                                                                                            <FaStar className='fastar' />
                                                                                                            : <FaRegStar className='faregstar' />
                                                                                                }
                                                                                          </>
                                                                                    )
                                                                              })

                                                                        }
                                                                        <div className='rating'>
                                                                              {v.rating.rate}/5
                                                                        </div>
                                                                  </div >
                                                            </div>
                                                            <h3>${v.price}</h3>
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