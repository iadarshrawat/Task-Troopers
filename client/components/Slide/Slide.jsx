import React, { Children } from 'react'
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard'
import {cards} from '../../src/data';
import './Slide.scss'

function Slide({children, slidesToShow, arrowsScroll}) {
    return (
        <div className='slide'>
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

export default Slide