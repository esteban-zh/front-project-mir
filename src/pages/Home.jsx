import React from 'react'
import Header from '../components/Header'
import CarList from '../containers/CarList'

const Home = (props) => {
  return (
    <div className="contenedor">
        <Header />
        <CarList list={props.list} images={props.images} />
    </div>
  )
}

export default Home