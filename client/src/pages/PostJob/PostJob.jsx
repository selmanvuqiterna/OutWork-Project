import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./postjob.css"

function PostJob() {
  return (
    <div className='postjob-div'>
        <div className='navbar-div'>
            <Navbar/>
        </div>

        <div className='body-div'>
            <div className="post-form-div">
            <form method='POST' action="">
                <input type="text" name='category' className='post-form-input' placeholder='Titulli i punes' />



            </form>
            </div>
        </div>


    </div>
  )
}

export default PostJob