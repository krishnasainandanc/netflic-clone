import React,{useState,useEffect} from 'react'
import net from './netflix-logo-0.png'
import './navbar.css'

const NavBar = () => {
    const [Bar,setBar]=useState(false) 
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
           const c=window.scrollY
           if(c>100)
           {
               setBar(true)   
           }
           else{
            setBar(false)   
           }
        })
    },[]);
    

    return (
    <div className='navbar'> 
        
        <div className={`main  ${Bar && "main__1"}`} >
           <img src={net} alt="no image" className='img'/>
           <div className='button'>
            <select className="left">
                <option>English</option>
                <option>Hindi</option>
            </select>
           
            <button className="right">Sign In</button>
            {/* {Bar?<p>krishna</p>:<p>sai</p>} */}
        </div>

        </div>
    </div>
  )
}

export default NavBar