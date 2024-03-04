import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import TestiMonial from '../../components/testimonial/TestiMonial'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice'

const Home = () => {
  const dispatch=useDispatch();
  const cartItem=useSelector((state)=>state.cart);
  console.log(cartItem);
  const addCart=()=>{
    dispatch(addToCart("shirt"));
  }
  const deleteCart=()=>{
    dispatch(deleteFromCart("shirt"));
  }
    
  
  return (
    <div>
      <Layout>
      <div className='flex gap-5 justify-center'>
        <button className='bg-gray-300' onClick={()=>addCart()}>add</button>
        <button className='bg-gray-300' onClick={()=>deleteCart()}>delete</button>
      </div>
       <HeroSection />
       <Filter />
       <ProductCard />
       <Track />
       <TestiMonial />

      </Layout>
    </div>
  )
}

export default Home
