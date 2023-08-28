import React from 'react'
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import { cards } from '../../src/data.js';
import { projects } from '../../src/data.js';
import CatCard from '../../components/catCard/CatCard';
import './Home.scss'
import ProjectCard from '../../components/projectCard/ProjectCard';

function Home() {
  return (
    <div className='home'>
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {
          cards.map(card => (
            <CatCard key={card.id} item={card} />
          ))
        }
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>


      <Slide slidesToShow={5} arrowsScroll={5}>
        {
          projects.map(card => (
            <ProjectCard key={card.id} item={card} />
          ))
        }
      </Slide>
    </div>
  )
}

export default Home;