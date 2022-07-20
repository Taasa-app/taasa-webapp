import {useState} from 'react';
import { motion } from "framer-motion";

const Home = () => {
const [blogs, ] = useState([
    {title: 'Share location with our team', body: 'In event of a crash/ road incident, the mobile phone detects vibration and prompts user to send an alert to paramedics, police and insurance company',  id:1},
    {title: 'Dispatch a paramedics team', body: 'Upon sending the alarm/beacon emergency teams that are nearby, travel to the scene of the crash to administer first-aid and transport affected individuals to hospital', id:2},
    {title: 'Map location of incident', body: 'After incident has been handled, the location can be added onto an incident map; if more incidents happen in the same place, it can be marked as a blackspot',  id:3}
]);

    return (  
        <div className="home">
            <div></div>
            <h1>Save lives in time</h1>
            <p>Africa's fastest emergency response app</p>
            <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => null}
          >
            Report Incident
          </motion.button>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => null}
          >
            Gain early access
          </motion.button>

          
  <h1 class="">Features</h1>

  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Unpack the onion with us</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
        
        </div>
        <h2>Share location with our team</h2>
        <p>In event of a crash/ road incident, the mobile phone detects vibration and prompts user to send an alert to paramedics, police and insurance company.</p>
        
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
          
        </div>
        <h2>Dispatch a paramedics team</h2>
        <p>Upon sending the alarm/beacon emergency teams that are nearby, travel to the scene of the crash to administer first-aid and transport affected individuals to hospital.</p>
        
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
          
        </div>
        <h2>Map location of incident</h2>
        <p>After incident has been handled, the location can be added onto an incident map; if more incidents happen in the same place, it can be marked as a blackspot.</p>
        
      </div>
    </div>
    
    <div class="b-example-divider"></div>    
    <div>
      <div class="bg-light p-5 rounded">
        <div class="col-sm-8 mx-auto">
          <h1>Use cases</h1>
          <p>This example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the <a href="../examples/navbar-static/">top</a> and <a href="../examples/navbar-fixed/">fixed top</a> examples.</p>
          <p>At the smallest breakpoint, the collapse plugin is used to hide the links and show a menu button to toggle the collapsed content.</p>
          <p>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => null}
          >
            View docs
          </motion.button>
            
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider"></div>              
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    
                </div>
                
            ))}         
        </div>
    );
}
 
export default Home;