import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './jobs.css'
import SearchLogo from "../../assets/search-logo.png";
import PostLogo from "../../assets/add-job-logo.png"
import Gjirafa from "../../assets/gjirafa.png"  


const Jobs = () => {
  return (

    <div className='jobs'>
         <div className="navbar">
                 <Navbar />
            </div>
          <div className='container-jobs'>
            <div className='jobs-search'>
              <div className='job-div' id='job-kerko'>
              <img src={SearchLogo} alt="Search logo"  id='search-logo' />
              <p className='text-card'>Kerko Pune</p>
              </div>
            <div className='job-div' id='job-posto'>
            <img src={PostLogo} alt="Post Logo" id='search-logo' />
            <p className='text-card'>Post a Job</p>
            </div>
            </div>
            <div className='jobs-post'>Post a job</div>
          </div>

          <div className="container-cards">
          <div class="card-jobs">
            <div className='img-div '>
            <img src={Gjirafa} class="card-img-job" alt="job" />
            </div>
            
             <div class="card-job-body">
            <h5 class="card-job-title">Card title</h5>                                                                                                                                                                                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href='/' class="btn-job">Go somewhere</a>
             </div>
              </div>

          </div>
    </div>
  )
}

export default Jobs