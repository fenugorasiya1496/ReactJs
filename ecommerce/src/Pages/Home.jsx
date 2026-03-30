import React from 'react'
import ProductBar from '../Components/ProductBar'
import Hero from '../Components/Home/Hero'
import DeatilsBar from '../Components/Home/Detailsbar'
import CategoryBar from '../Components/Home/CategoryBar'
import Offer from '../Components/Home/Offer'
import DealBar from '../Components/Home/DealBar'
import DiscontBar from '../Components/Home/DiscountBar'
import Newsletter from '../Components/Home/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero />
      <DealBar/>
      <CategoryBar />
      <ProductBar />
      <Offer/>
      <DeatilsBar />
      <DiscontBar/>
      <Newsletter/>

    </>
  )
}

export default Home