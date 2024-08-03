import React, { useState } from 'react';
import Template1 from '../Templates/Template1';
import Template2 from '../Templates/Template2';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';

const Next = () => {

  const [formData, setFormData] = useState({});
  const [template, setTemplate] = useState('Template1');

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const saveResume = () => {
    const content = document.querySelector('.resume-template').outerHTML;
    const pdfContent = htmlToPdfmake(content);
    pdfMake.createPdf({ content: pdfContent }).download('resume.pdf');
  };

  return (
    <div className="App">
      <div className="template-selection">
        <h1>Choose a Template</h1>
        <select
          className="template-dropdown"
          onChange={(e) => setTemplate(e.target.value)}
          value={template}
        >
          <option value="Template1">Template 1</option>
          <option value="Template2">Template 2</option>
        </select>
        <div className="template-container">
          {template === 'Template1' && <Template1 data={formData} />}
          {template === 'Template2' && <Template2 data={formData} />}
        </div>
        <button className="save-button" onClick={saveResume}>Save</button>
      </div>
    </div>
  );
};

export default Next;
