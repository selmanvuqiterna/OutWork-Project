import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './jobs.css'


const Jobs = () => {
  return (
    
    <div className='jobs'>
         <div className="navbar">
                 <Navbar />
            </div>
          <div className='container-jobs'>
            <div className='jobs-search'>
              <input type="text" placeholder='Search Jobs' className='search-field' />
            <button class="search-button" type="submit">Search</button>
            </div>
            <div className='jobs-post'>Post a job</div>
          </div>
    </div>
  )
}

export default Jobs