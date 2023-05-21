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
