import React from 'react'
import CardSec from '../assets/Cardimg.png'
import Caro1 from '../assets/Caro1.png'
import Caro2 from '../assets/Caro2.png'
import Caro3 from '../assets/Caro3.png'

const Cards = () => {
  return (
    <>
        <div className="ms-5 container row">
            <img style={{width:"100vh", height:"35vh"}} className='col-sm-3 col-md-3 mx-auto d-block img-fluid' src={CardSec} alt="" />
        </div>
        <div className="container-fluid ms-5 ps-5 d-flex">
            <div className="row ms-5">
                <div className="col-sm-3">
                    <div className="card shadow">
                    <div className="card-body">
                        <h3 className="card-title">AI</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="#" className='nav-link'>Learn more</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card shadow">
                    <div className="card-body">
                        <h3 className="card-title">Wikis</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="#" className='nav-link'>Learn more</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card shadow">
                    <div className="card-body">
                        <h3 className="card-title">Projects</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="#" className='nav-link'>Learn more</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card shadow">
                    <div className="card-body">
                        <h3 className="card-title">Docs</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="#" className='nav-link'>Learn more</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div id="carouselId" class="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ol>
                    <div className="mt-3 carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className='rounded shadow' style={{width:"80%"}} src={Caro1} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className='rounded shadow' style={{width:"80%"}} src={Caro2} alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className='rounded shadow' style={{width:"80%"}} src={Caro3} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
    </>
  )
}

export default Cards