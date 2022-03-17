import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../REQUEST/axios'
import r from '../REQUEST/Request'
import NavBar from './NavBar'
const Banner = () => {
    const[BMovie,setBMovie]=useState([])
    useEffect(()=>{
      async function fetchData()
      {
        const request=await axios.get(r.fetchNetflixOriginals)
        console.log(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
        setBMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
      }
      fetchData()
    },[])
  return (
        <div className="banner" style={{
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${BMovie.backdrop_path}")`,
            position:"relative"
        }}>
          <NavBar/>
           <div className='banner__content'>
                <h1>{BMovie.name}</h1>
                <div className='button'>
                    <button>play</button>
                    <button>My List</button>
                </div>
                <p>{BMovie.overview}</p>
                
            </div>
            <div className="fade__button">
                  
            </div>
        </div>
        
  )
}

export default Banner