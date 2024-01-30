import React from 'react'
import ProductDetails from './ProductDetails/ProductDetails'
import Reviews from './Reviews/Reviews'
import ScrollToTop from '../../hook/ScrollToTop'



const Products = () => {


      return (
            <div>
                  <ScrollToTop />
                  <ProductDetails />
                  <Reviews />
            </div>
      )
}

export default Products