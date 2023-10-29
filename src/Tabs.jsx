import React, { useState } from "react";
import Duties from "./Duties";

const Tabs = ({ jobs, curItem }) => {
  const { id, title, duties, dates, company } = jobs[curItem];
  //   console.log(jobs);

  return (
    <div className="job-info">
      <h4>{title}</h4>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </div>
  );
};

export default Tabs;
