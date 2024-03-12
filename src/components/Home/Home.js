import React from 'react'
import Header from '../header/Header'
import Banner from '../Banner/Banner'
import CollectionCards from '../seasonCollection/CollectionCards'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div className='h-[100vh] w-[100%]'>

    <Header />    
    <Banner />
    <CollectionCards />
    <Footer />

    </div>
  )
}

export default Home;
