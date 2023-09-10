import React, { useEffect, useRef, useState,} from 'react'
import './Gigs.scss'
import GigCard from '../../components/gigCard/GigCard';
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
import {useLocation } from 'react-router-dom';

function Gigs() {

  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation();
  console.log(useLocation())

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res=>{
        return res.data;
      })
  })
  console.log(data);

  const reSort = (type)=>{
    setSort(type);
    setOpen(false);
  }

  useEffect(()=>{
    refetch();
  }, [sort])

  const apply = ()=>{
    refetch();
  }


  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>{`FIVERR > GRAPHICS & DESIGN >`}</span>
        <h1>AI ARTIST</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>BUDGET</span>
            <input type="text" placeholder='min' ref={minRef}/>
            <input type="text" placeholder='max' ref={maxRef}/>
            <button onClick={apply}>Apply</button>
          </div> 
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>{sort==='sales' ? "Best Selling":"Newest"}</span>
            <img src="./img/down.png" alt="" onClick={()=>{setOpen(!open)}}/>
            {open &&
              <div className="rightMenu">
              <span onClick={()=>reSort("createdAt")}>Newest</span>
              <span onClick={()=>reSort("sales")}>Best Selling</span>
            </div>
            }
          </div>
        </div>
        <div className="cards">
          {isLoading ? "loading": error ? "something wents wrong!" : data.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs