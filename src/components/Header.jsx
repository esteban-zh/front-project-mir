import React from 'react'
import circle from '../images/circle.png'
import road from '../images/imagen-banner3.jpeg'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className="header">
        <div></div>
        <h1 className='title'>BUGGY &</h1>
        <h1 className="title2"> BUMPER, INC</h1>
        <h2 className='subtitle'>LA MEJOR RED DE ALQUILER DE AUTOS</h2>
        <img src={road} alt="road" />
        <img src={circle} alt="circle" />
    </div>
  )
}

export default Header