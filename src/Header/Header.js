import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <div className='header'>
       <div className='headertitle'>
        <span className='headertitlesm'>React & Node</span>
        <span className='headrertitlelrg'>Blog</span>

       </div>
        <img className='headerImage' 
        alt=""
        src="https://images.pexels.com/photos/90766/landscape-autumn-fog-village-90766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        
    </div>
  )
}
