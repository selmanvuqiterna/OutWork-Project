import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './jobs.css'
import JobCards from '../../components/JobCards/JobCards'


const Jobs = () => {

 



  return (

    <div className='body-jobs'>
         <div className="navbar">
                 <Navbar />
            </div> 
            <div className="mainbody">
            <div className='container-jobs'>
            <div className='jobs-search'>
              <div className='job-div' id='job-kerko'>
              <p className='text-card'>Kerko Pune</p>
              </div>
            <div className='job-div' id='job-posto'>
            <p className='text-card'>Krijo Shpallje</p>
            </div>
            </div>
            
          </div>

          <div className="cards-div">
              <JobCards/>
          </div>
            </div>
          
    </div>
  )
}

export default Jobs