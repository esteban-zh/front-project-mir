import React from 'react'
import Header from '../components/Header'
import CarList from '../containers/CarList'

const Home = ({list}) => {
  return (
    <div className="contenedor">
        <Header />
        <CarList list={list}/>
    </div>
  )
}

export default Home