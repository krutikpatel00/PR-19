import React from 'react'
import './DressStyle.css'
const DressStyle = () => {
      return (
            <div className='dress-style'>
                  <div className="container">
                        <div className='dress-style-inner'>
                              <div className='dress-style-title'>
                                    <h2>BROWSE BY DRESS STYLE</h2>
                              </div>
                              <div className="dress-content">
                                    <div className="row">
                                          <div className="w-40 w-sm-1">
                                                <div className="dress-iteme">
                                                      <img src={require('../../../Img/img9.png')} alt="" />
                                                      <h4>Casual</h4>
                                                </div>
                                          </div>
                                          <div className="w-60 w-sm-1">
                                                <div className="dress-iteme">
                                                      <img src={require('../../..//Img/img10.png')} alt="" />
                                                      <h4>Formal</h4>
                                                </div>
                                          </div>
                                          <div className="w-60 w-sm-1">
                                                <div className="dress-iteme">
                                                      <img src={require('../../../Img/img11.png')} alt="" />
                                                      <h4>Party</h4>
                                                </div>
                                          </div>
                                          <div className="w-40 w-sm-1">
                                                <div className="dress-iteme">
                                                      <img src={require('../../..//Img/img12.png')} alt="" />
                                                      <h4>Gym</h4>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default DressStyle