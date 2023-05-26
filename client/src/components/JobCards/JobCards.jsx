import React from 'react';
import "./JobCard.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

function JobCards() {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
      const fetchAllJobs = async()=>{
        try{
          const res = await  axios.get("http://localhost:8800/jobs")
          setJobs(res.data)
  
        }catch(error){
          console.log(error)
        }
      }
      fetchAllJobs()
  
    },[])

        
      
  return (
    <div className='card-container'>

        {jobs.map(jobs=>(
        <div class="cards-job">
        <img src={jobs.job_image} class="card-img-top" alt="No img Avaliable" />
            <div class="card-body">
                <h5 class="card-title">{jobs.job_category}</h5>
                <p class="card-text">Kompania: {jobs.job_company_name}</p>
                <p class="card-text">Vendi: {jobs.job_location}</p>
                <p class="card-text">Koha e skadimit: {jobs.job_date_created}</p>
                <p class="card-text">Koha e shpalljes: {jobs.job_date_expired}</p>
                <a href={jobs.job_source} target='_blank' rel="noopener noreferrer" class="btn">Apliko Ketu</a>
            </div>
        </div>
))}
    </div>
  )

}

    

export default JobCards;