import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './home.css'
import ImageWorkers from "../../assets/ImageWorkers.png"

const Home =()=>{
   return(
    <div className="body">
            <div className="navbar">
                 <Navbar />
            </div>

            <div className="mainDiv">
               <div className="title-container">
      

                    <div className="card-home">
                         <div id="text-card">
                              <h3 id="title-card">OutWork</h3> <br /> 
                         The ultimate platform for connecting job seekers with employers! 
                         </div>
                    </div>

                    <div className="home-card"> 
                         
                         <div className="chose-card">
                         <p id="text-home">We are <span id="alw">always</span> there for all your needs</p>
                         </div>
                    </div>

                    <div id="introText">
                         <p id="text">
                         If you are looking for a job <br />
                         we are here to help you find <br />
                         your desired job.
                         </p>
                    </div>

               </div>

               <div className="link-class">
                    <a id="link-id" href="/Apply">/APPLY NOW</a>
               </div>

               

               <div className="footer">
                    <Footer />
               </div>
               

            </div>
            <div className="body-img">
                    <img src={ImageWorkers} alt="" />
           </div>
            
        </div>
    

   );
}


export default Home;
