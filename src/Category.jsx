import React from "react";

const Category = ({ jobs, curItem, setCurItem }) => {
  //   console.log(jobs);

  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={curItem === index ? "job-btn active-btn" : "job-btn"}
            onClick={() => {
              setCurItem(index);
            }}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
