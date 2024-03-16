import React from 'react'
import { MdOutlineMail } from "react-icons/md";

import { FooterData, FooterLogoDat } from '../../data/FooterData';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

import './Footer.css'
const Footer = () => {
      return (
            <div className='footer'>
                  <div className='container'>
                        <div className='position-relative'>
                              <div className='footer-offers'>
                                    <div className="row">
                                          <div className="w-70 w-sm-1">
                                                <div className='footer-offers-title text-center-sm'>
                                                      <h2>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2>
                                                </div>
                                          </div>
                                          <div className="w-30 w-sm-1">
                                                <div className='footer-offers-form'>
                                                      <form action="">
                                                            <div className='input-email'>
                                                                  <input type="text" placeholder='Enter your email address' />
                                                                  <MdOutlineMail className='mdoutlinemail' />
                                                            </div>
                                                            <button >Subscribe to Newsletter</button>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='footer-inner'>
                                    <div className="row">
                                          <div className="w-26 w-md-1">
                                                <div className="footer-items">
                                                      <img src='./Assets/Img/SHOP.CO.png' alt="" />
                                                      <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                                                      <div className='footer-icon d-flex'>
                                                            <a href="/">
                                                                  <FaTwitter />
                                                            </a>
                                                            <a href="/">
                                                                  <FaFacebookF />
                                                            </a>
                                                            <a href="/">
                                                                  <FaInstagram />
                                                            </a>
                                                            <a href="/">
                                                                  <LuGithub />
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                          {
                                                FooterData.map((v, i) => {
                                                      return (
                                                            <div key={i} className="w-18 w-md-4 w-sm-2">
                                                                  <div className="footer-items">
                                                                        <h4>{v.title}</h4>
                                                                        <ul>
                                                                              {
                                                                                    v.listItems.map((item) => {
                                                                                          return (
                                                                                                <li><a href="/">{item}</a></li>
                                                                                          )
                                                                                    })
                                                                              }
                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      )
                                                })
                                          }

                                    </div>
                              </div>

                        </div>
                        <div className='copyright'>
                              <div className="row align-center">
                                    <div className="w-2 w-sm-1">
                                          <div className="copy-items ">
                                                <p>Shop.co © 2000-2023, All Rights Reserved</p>
                                          </div>
                                    </div>
                                    <div className="w-2 w-sm-1">
                                          <div className="copy-items">
                                                <div className='d-flex justify-content-end align-center justify-content-center-sm'>
                                                      {
                                                            FooterLogoDat.map((items, pos) => {
                                                                  return (
                                                                        <a href="/">
                                                                              {items.svg}
                                                                        </a>
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

export default Footer