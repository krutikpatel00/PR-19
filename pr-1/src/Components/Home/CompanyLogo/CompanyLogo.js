import React from 'react'
import LogoData from '../../../data/LogoData'
import './CompanyLogo.css'
const CompanyLogo = () => {
  return (
    <div className='company-logo'>
      <div className="container">
        <div className="row justify-content-between align-center">
          {
            LogoData.map((v, i) => {
              return (
                <div>{v.logo}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo