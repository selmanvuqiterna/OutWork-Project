import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './home.css'

const Home =()=>{
   return(
    <div className="body">
            <div className="navbar">
                 <Navbar />
            </div>

            <div className="mainDiv">
               <div className="title-container">
                    <h1 id="titleContainer">Welcome to Outwork!</h1>
      

                    <div className="card-home">
                         <p id="text-card">
                              <h3 id="title-card">OutWork</h3> <br /> 
                         The ultimate platform for connecting job seekers with employers! 
                         </p>
                    </div>

                    <div className="home-card"> 
                         
                         <div className="chose-card">
                         <h2 id="title-homecard">What is your purpose?</h2>
                              <a className="btns" id="employee-user" href="/Employees">Find Employees</a>
                              <a className="btns" id="employeer-user" href="/Login">Get Employed</a>
                         </div>
                    </div>

                    <div id="introText">
                         <p id="text">
                         Welcome to OutWork <br/> The ultimate platform for connecting job seekers with employers! <br />
                         OutWork is designed to make the job search process easier, faster and more efficient.
                         </p>
                    </div>

               </div>

               <div className="button-class">
                    <a id="button-id" href="/Apply">Apply</a>
               </div>


               <div className="footer">
                    <Footer />
               </div>
               

            </div>

            
        </div>
    

   );
}


export default Home;
