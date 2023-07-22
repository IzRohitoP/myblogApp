import React from 'react'
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import home from './home.css';
import Post from '../../Posts/Post';

export default function Home() {
  return (
    <>
     <Header/>
    <div className='home'>
  <Post/>
  <Sidebar/>
    </div>
    </>
  )
}
