import React from 'react'
import ProductList from './product/ProductList'
import Banner from './banner/Banner'
import Block from './block/Block'
import FeaturedProducts from '../products/FeaturedProducts'
import Denim from './denims/Denim'
const Home = () => {
  return (
    <>  
    <Banner/>
  <ProductList />
<Block/>  
<FeaturedProducts/>
<Denim/>
    </>
  )
}

export default Home