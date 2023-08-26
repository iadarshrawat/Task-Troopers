import React from 'react'
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import { cards } from '../../src/data.js';
import CatCard from '../../components/catCard/CatCard';

function Home() {
  return (
    <div className='home'>
      <Featured/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {
          cards.map(card=>(
            <CatCard key={card.id} item={card} />      
          ))
        }
      </Slide>

    </div>
  )
}

export default Home;