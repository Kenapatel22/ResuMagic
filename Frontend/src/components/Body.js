import React from 'react';
import { useNavigate } from 'react-router-dom';

const Body = () =>{
   
    const navigate = useNavigate(); 
      
    return(
        <main className="main">
          <section className="intro">
          <div className="text-content">
          <h3 className="summary">"Create professional resumes effortlessly with <strong>ResuMagic</strong>. 
          Our intuitive builder helps you craft standout resumes in minutes."</h3>
          <button className="build-resume" onClick={()=>navigate("/BuildResume.js")} >Build Resume</button>
          </div>
          <img className="graphic" src="https://img.freepik.com/free-photo/women-use-laptops-office-with-pleasure_1150-26801.jpg" alt="Graphic" />
        </section>
        
        <br></br>
        
        <section className="steps">
        <h2>How to Create a Resume???</h2>
        <ol className="steps-list">
          <li>Click on button & Fill out your details.</li>
          <li>Choose a template from provided templates.</li>
          <li>Then sign up for download the resume.</li>
          <li>Review your resume and download it as a PDF.</li>
        </ol>
      </section>
      <section className="features">
        <h2>Features of ResuMagic</h2>
        <div className="features-list">
          <div className="feature-item">
            <h4>Easy Customization</h4>
            <p>Personalize your resume with a variety of templates and customization options.</p>
          </div>
          <div className="feature-item">
            <h4>Free of Cost</h4>
            <p>We do not charge you any money for our services
            But we encourage you to donate, it keeps our services running.</p>
          </div>
          <div className="feature-item">
            <h4>Super Fast</h4>
            <p>With out easy to use services you can build your resume in less than 10 minutes.</p>
          </div>
        </div>
      </section>
      </main>
    )
}
export default Body;