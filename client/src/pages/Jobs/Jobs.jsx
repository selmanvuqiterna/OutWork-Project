import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './jobs.css'
import JobCards from '../../components/JobCards/JobCards'
import { Link } from 'react-router-dom'


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
           <Link to='/Shpallje' className='text-card'> <p className='text-card'>Krijo Shpallje</p></Link> 
            </div>
            </div>
            
          </div>

          <div className="jobCards-div">
              <JobCards/>
          </div>
            </div>
          
    </div>
  )
}

export default Jobs