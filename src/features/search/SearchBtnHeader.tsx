import React from 'react';

const SearchBtnHeader = () => {
  return (
    <div className="searches">
      <form method="post">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i className="icofont-search"></i>
        </button>
        <span className="cancel-search">
          <i className="icofont-close"></i>
        </span>
        <div className="recent-search">
          <h4 className="recent-searches">Your's Recent Search</h4>
       
        </div>
      </form>
    </div>
  );
};

export default SearchBtnHeader;
