import React, { Fragment } from 'react'
import './style.css';

const Filter = () => (
  <Fragment>
    <div className="">
    <div className="shortcuts">
          <div className="style-filter">
            Smart filters
             </div>
          <div className="style-status">
            <input type="text" placeholder="Search" className="search-filter" />
            <input type="button" value="DELIVERED" className="btn-filter" />
          </div>
          filter...
         </div>
      <hr />
    </div>
  </Fragment>
);

export default Filter;