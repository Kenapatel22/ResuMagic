import React from 'react';

const Template2 = ({ data }) => (
  <div className="resume-template">
    <header className="resume-header">
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.mobileNumber}</p>
      <p>{data.address}</p>
      <p>{data.portfolio}</p>
    </header>
    <section className="resume-section">
      <h2>University</h2>
      <p>{data.universityName}</p>
    </section>
    <section className="resume-section">
      <h2>Course</h2>
      <p>{data.course}</p>
    </section>
    <section className="resume-section">
      <h2>CGPA</h2>
      <p>{data.cgpa}</p>
    </section>
    <section className="resume-section">
      <h2>Skills</h2>
      <p>{data.skills}</p>
    </section>
  </div>
);


export default Template2;
