import React from 'react'
import image from './printivo.png'
import style from './NavBar.module.css'

const Jumbotron = () => {
  return (
    <>
        <section className='bg-light row container-flex'>
            <div className='col-6 p-5'>
              <div className={style.div}>
                <h1 className={style.text}>Quality Prints</h1>
                <h5 className='text-secondary h4'>Shipped to your doorstep</h5>
                <br/>
                <h6 className='text-secondary'>What would you like to print today?</h6>
                <input className='p-4 w-100 h6' type="search" name="search" id="" placeholder='Search for Business cards, T-shirts, Mugs, etc' />
              </div>
            </div>
            <div className="col">
              <img className={style.img} src={image} alt="Hand holding Printivo Card"/>
            </div>
        </section>
    </>
  )
}

export default Jumbotron