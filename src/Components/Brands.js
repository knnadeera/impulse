import React from 'react'
import brand1 from '../assets/brands/brand1.png'
import brand2 from '../assets/brands/brand2.png'
import brand3 from '../assets/brands/brand3.png'
import brand4 from '../assets/brands/brand4.png'
import brand5 from '../assets/brands/brand5.png'
import './Brands.css'

const Brands = () => {
  return (
    <div className='brands'>
        <img src={brand1} alt='brand'/>
        <img src={brand2} alt='brand'/>
        <img src={brand3} alt='brand'/>
        <img src={brand4} alt='brand'/>
        <img src={brand5} alt='brand'/>
    </div>
  )
}

export default Brands