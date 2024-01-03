import React from 'react'
import Blogs from '../compponents/Blogs'
import Header from '../compponents/Header'
import Pagination from '../compponents/Pagination'


const Home = () => {
  return (
    <div className="bg">
      <Header/>
      <div className='py-24 mx-auto max-w-[720px] px-[25px] '>
        
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default Home;