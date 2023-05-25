import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './postjob.css'

const PostJob = () => {
  return (
    <div className='PostJob'>
        <div className="navbar">
                 <Navbar />
            </div>
            <div className='container-post-job'>
                <h4 className='post-job-title'>POSTO KONKURSIN E PUNËS</h4>
                <br />
                <p className='post-job-kushti'>Plotëso informatat e shpalljes (Shpallja juaj do të postohet brenda 24 orëve!)</p>
            
                <div className='post-job-informatat'>
                    <div className='post-job-informata-shpallje'>
                        <h4 className='post-job-informata-shpallje-header'>Informatat për shpalljen</h4>
                        <br />
                        <form action="POST">
                            <label htmlFor="inputTitle" className='post-job-form-label'>Titulli</label>
                            <br />
                            <input id='inputTitle' type="text"  className='post-job-form-input'/>
                            <br /><br /><br />
                            <label htmlFor="inputCompanyName" className='post-job-form-label'>Emri Kompanisë</label>
                            <br />
                            <input id='inputCompanyName' type="text"  className='post-job-form-input'/>
                            <br /><br /><br />
                            <label htmlFor="inputCategory" className='post-job-form-label'>Kategoria</label>
                            <br />
                            <input id='inputCategory' type="text"  className='post-job-form-input'/>
                            <br /><br /><br />
                            <label htmlFor="inputType" className='post-job-form-label'>Lloji</label>
                            <br />
                            <input id='inputType' type="text"  className='post-job-form-input'/>
                            <br /><br /><br />
                            <label htmlFor="inputDate" className='post-job-form-label'>Data e skadimit</label>
                            <br />
                            <input id='inputDate' type="text"  className='post-job-form-input'/>
                            <br /><br /><br />
                            <label htmlFor="inputSalary" className='post-job-form-label'>Rroga(Opsionale)</label>
                            <br />
                            <input id='inputSalary' type="text"  className='post-job-form-input'/>
                        </form>
                    </div>
                    <div className='post-job-informata-kontakti'>
                    <h4 className='post-job-informata-shpallje-header'>Informatat e kontaktit</h4>
                    <br />
                    <form action="POST">
                    <label htmlFor="inputEmail" className='post-job-form-label'>Email</label>
                     <br />
                      <input id='inputEmail' type="text"  className='post-job-form-input'/>
                      <br /><br />
                      <input type="checkbox" name="" id="hideEmail" />
                      <label htmlFor="hideEmail" style={{marginLeft:'5px',fontSize: '14px'}}>Mos e shfaq emailin</label>
                       <br /><br /><br />
                       <label htmlFor="inputShteti" className='post-job-form-label'>Shteti</label>
                        <br />
                        <input id='inputShteti' type="text"  className='post-job-form-input'/>
                        <br /><br /><br />
                        <label htmlFor="inputRajoni" className='post-job-form-label'>Rajoni</label>
                        <br />
                        <input id='inputRajoni' type="text"  className='post-job-form-input'/>
                        <br /><br /><br />
                        <label htmlFor="inputTelefoni" className='post-job-form-label'>Telefoni</label>
                        <br />
                        <input id='inputTelefoni' type="text"  className='post-job-form-input'/>
                           
                    </form>
                    </div>
                </div>
                <div className='post-job-logo'>
                    
                    <label htmlFor="jobsLogoFile" id='inputFile'>Ngarko një logo të kompanisë suaj.</label>
                    <input type="file" name="" id="jobsLogoFile" class="file-input" />
                </div>
            </div>
            
            
    </div>
  )
}

export default PostJob