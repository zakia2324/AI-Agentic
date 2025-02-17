import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Contact from './components/contact'
import Price from './components/Price'
import Footer from './components/Footer'
import {Component} from '@/components/chart-area-interactive'
import { Components} from '@/components/chart-pie-donut-text'




const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
    <Component/>
    <Components/>
      <Price/>
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default page

