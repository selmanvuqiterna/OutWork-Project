import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './jobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import post1 from '../../assets/post1.png'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Jobs = () => {
  
const [jobs,setJobs] = useState([]);

useEffect(()=>{
  const fetchAllJobs = async()=>{
    try{
      const res = await axios.get("http://localhost:8800/jobs");
      setJobs(res.data);
    }catch(error){
      console.log(error);
    }
    
  }

  fetchAllJobs()
},[])

  return (
    
    <div className='jobs'>
         <div className="navbar">
                 <Navbar />
            </div>
          <div className='container-jobs'>

            
            <div className='container-header'>
            <div className='jobs-search'>
            <button className="search-button" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search'/>
              <br/>
              Kërko punë
              </button>
            </div>
            <div className='jobs-post'>
            <button className="search-button" type="submit">
            <Link to="/Shpallje" className="button-link">
              <FontAwesomeIcon icon={faPlus} className='icon-search' />
              <br />
              Posto ofertë pune
            </Link>
          </button>
              </div>
          </div>


            <div className='container-content'>
              {jobs.map(jobs=>(
              <div className='job-post' key={jobs.id}>
                              
              <div className='job-post-photo'>
                <img src={post1} alt="" className='job-post-photo'/>
              </div>
              <div className='job-post-description'>
                <div className='job-post-link'>
                <a href="#" className='job-link'>Operations associate (E-COMMECRCE)</a>
                </div>
                <div className='job-description'>
                  <div className='job-description-1'>
                    <p className='job-description-p'>Kategoria:<strong>{jobs.job_category}</strong></p>
                    <p className='job-description-p'>Shteti:<strong>{jobs.job_location}</strong></p>
                    <p className='job-description-p'>Kompania:<strong>{jobs.job_company_name}</strong></p>
                  </div>
                  <div className='job-description-2'>
                    <p className='job-description-p'>Burimi:<strong>{jobs.job_source}</strong></p>
                    <p className='job-description-p'>Data:<strong>{jobs.formatted_date}</strong></p>
                    <p className='job-description-p'>Data e Skadimit:<strong>{new Date(jobs.jobs_date_expired).toLocaleDateString()}</strong></p>
                  </div>
                </div>
              </div>
              </div>
              ))}
         
            </div>

          </div>
    </div>
  )
}

export default Jobs