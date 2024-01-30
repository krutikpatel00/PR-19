import React, { useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Coustomrs.css'
import { FaStar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import CustomrsData from '../../../data/CustomrsData';




const Coustomrs = () => {


      const star = [1, 2, 3, 4, 5]
      const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            centerMode: false,
            slidesToShow: 3, // Number of slides to show at a time
           
            responsive: [
                  {
                        breakpoint: 992,
                        settings: {
                              slidesToShow: 2,
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

      const sliderRef = useRef(null);

      const next = () => {
            if (sliderRef.current) {
                  sliderRef.current.slickNext();
            }
      };

      const previous = () => {
            if (sliderRef.current) {
                  sliderRef.current.slickPrev();
            }
      };

      return (
            <div className='coustomrs'>

                  <div className="container">
                        <div className="coustomrs-tltle d-flex align-center justify-content-between">
                              <h2>OUR HAPPY CUSTOMERS</h2>
                              <div className='coustomrs-icon d-flex'>
                                    <FaArrowLeft className="faarrowleft" onClick={() => previous()} />
                                    <FaArrowRight className="faarrowright" onClick={() => next()} />
                              </div>
                        </div>
                  </div>

                  <Slider {...settings} ref={sliderRef} className='coustomrs-inner'>
                        {CustomrsData.map((items, index) => (
                              <div key={index} className="coustomrs-items">
                                    {star.map((item, index) => (
                                          <FaStar key={index} className="fastar" />
                                    ))}
                                    <div className="d-flex align-center">
                                          <h4>{items.title}</h4>
                                          <FaCheckCircle className="facheckcircle" />
                                    </div>
                                    <p>{items.description}</p>
                              </div>
                        ))}

                  </Slider>
            </div>
      )
}

export default Coustomrs