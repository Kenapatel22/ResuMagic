import React from 'react';

const Template1 = ({ data }) => (
  <div className="resume-template">
    <header className="resume-header">
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.mobileNumber}</p>
      <p>{data.address}</p>
      <p>{data.portfolio}</p>
    </header>
    <section className="resume-section">
      <h2>Education</h2>
      <p><strong>University:</strong> {data.universityName}</p>
      <p><strong>Course:</strong> {data.course}</p>
      <p><strong>CGPA:</strong> {data.cgpa}</p>
    </section>
    <section className="resume-section">
      <h2>Skills</h2>
      <p>{data.skills}</p>
    </section>
  </div>
);

export default Template1;
