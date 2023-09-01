import React from 'react'
import Slider from 'infinite-react-carousel';

function Gig() {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCurmbs">{`FIVERR > GRAPHICS & DESIGN`}</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img src="" alt="" />
            <span>Jhone Doe</span>
            <div className="stars"></div>
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <span>5</span>
          </div>
        </div>
        <Slider slidesToShow={1} arrowsScroll={1}>
          <img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'} alt="" />
          <img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'} alt="" />
          <img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'} alt="" />
          <img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'} alt="" />
          <img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'} alt="" />
        </Slider>
        <h2>About this GIG</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A commodi doloremque officia ad? Mollitia, pariatur debitis facilis id ducimus, nulla repellendus maxime minus ea sint fuga saepe magnam voluptatibus quis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quia eum sint ab soluta? Pariatur, saepe dicta in, iusto suscipit aspernatur cumque animi dolor quisquam harum quis exercitationem itaque vitae! </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'} alt="" />
              <div className="info">
              <span>John Doe</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos sunt eum necessitatibus labore optio? Vel labore delectus eos. Delectus numquam totam accusantium dolorum sit, debitis cumque? Cupiditate, qui voluptates.</p>
            </div>
          </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Gig