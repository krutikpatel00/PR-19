import React from 'react'
import Banner from './Banner/Banner'
import CompanyLogo from './CompanyLogo/CompanyLogo'
import Arrivals from './Arrivals/Arrivals'
import Selling from './Selling/Selling'
import DressStyle from './DressStyle/DressStyle'
import Coustomrs from './Customrs/Coustomrs'

const Home = () => {
      return (
            <>
                  <Banner />
                  <CompanyLogo />
                  <Arrivals />
                  <Selling/>
                  <DressStyle/>
                  <Coustomrs/>
            </>
      )
}

export default Home