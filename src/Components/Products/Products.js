import React, { useCallback, useEffect, useState } from 'react'
import ProductDetails from './ProductDetails/ProductDetails'
import Reviews from './Reviews/Reviews'
import ScrollToTop from '../../hook/ScrollToTop'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';

const Products = () => {

      const [ProductSigle, setProductSingle] = useState({})
      const { myId } = useParams()
      const [isLoading, setIsLoading] = useState(true);
      const [AddingToBag, setAddingToBag] = useState([]);

      useEffect(() => {
            axios.get('https://fakestoreapi.com/products/' + myId)
                  .then((res) => {
                        setProductSingle(res.data)
                        setIsLoading(false)
                        console.log(res.data);
                  })
                  .catch((err) => console.log(err))



            getDataAddBag()
      }, [myId, setProductSingle, setAddingToBag])

      const getDataAddBag = () => {
            let data = JSON.parse(localStorage.getItem('BagItem'))
            setAddingToBag(data ? data : [])
      }

      const addBagData = (id) => {
            const data = { ...ProductSigle, quantity: 1 };
            console.log(data);

            // Check if the item already exists in the cart based on its unique identifier (e.g., id)
            const existingItemIndex = AddingToBag.findIndex(item => item.id === data.id);

            if (existingItemIndex !== -1) {
                  // If the item already exists in the cart, update its quantity
                  const updatedCart = AddingToBag.map((item, index) => {
                        if (index === existingItemIndex) {
                              return { ...item, quantity: item.quantity + 1 };
                        } else {
                              return item;
                        }
                  });
                  setAddingToBag(updatedCart);
                  localStorage.setItem('BagItem', JSON.stringify(updatedCart));
            } else {
                  // If the item is not in the cart, add it with quantity 1
                  const updatedCart = [...AddingToBag, data];
                  setAddingToBag(updatedCart);
                  localStorage.setItem('BagItem', JSON.stringify(updatedCart));
            }



      }

      return (
            <div>
                  <ScrollToTop />
                  {isLoading ? (<Loading />) : < ProductDetails ProductSigle={ProductSigle} addBagData={addBagData} />}
                  <Reviews />
            </div>
      )
}

export default Products