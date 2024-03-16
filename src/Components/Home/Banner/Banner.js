import React from 'react'
import './Banner.css'

const Banner = () => {
      return (
            <section className='banner'>
                  <div className="container">
                        <div className="row align-center">
                              <div className="w-2 w-md-1">
                                    <div className="banner-items animate__bounceInLeft animate__animated">
                                          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                                          <a href='/' className='theme-btn'>Shop Now</a>
                                          <div className='row valuetion '>
                                                <div className='w-3 w-md-2'>
                                                      <div className='valuetion-items align-center-md'>
                                                            <h2>200+</h2>
                                                            <p>International Brands</p>
                                                      </div>
                                                </div>
                                                <div className='w-3 w-md-2'>
                                                      <div className='valuetion-items align-center-md'>
                                                            <h2>2,000+</h2>
                                                            <p>High-Quality Products</p>
                                                      </div>
                                                </div>
                                                <div className='w-3 w-md-1'>
                                                      <div className='valuetion-items align-center-md'>
                                                            <h2>30,000+</h2>
                                                            <p>Happy Customers</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="w-2 w-md-1">
                                    <div className="banner-items">
                                          <img src={require('../../../Img//BANNER.png')} alt="" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Banner