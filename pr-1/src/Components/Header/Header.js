import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
      return (
            <div className='header'>
                  <div className="container">
                        <div className="d-flex align-center justify-content-between">
                              <img src='./Assets/Img/SHOP.CO.png' alt="" />
                              <a href="javscript:void(0)" ><TiThMenu className='tithmenu' /></a>
                              <nav>
                                    <ul className='d-flex align-center'>
                                          <li><Link to='/'>Shop</Link></li>
                                          <li><Link to='casual'>On Sale</Link></li>
                                          <li><Link to='casual'>New Arrivals</Link></li>
                                          <li><Link to='casual'>Brands</Link></li>
                                    </ul>
                              </nav>
                              <div className='position-relative'>
                                    <input type="text" placeholder='Search for products...' />
                                    <IoSearch className='position-absolute search ' />
                              </div>
                              <div className='header-icon d-flex align-center'>
                                    <Link to='/card'>
                                          <LuShoppingCart className='shop' />
                                    </Link>
                                    <Link to='/card'>
                                          <FaRegCircleUser className='circle-user' />
                                    </Link>

                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Header