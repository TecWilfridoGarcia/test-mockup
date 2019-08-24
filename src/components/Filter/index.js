import React, { Fragment } from 'react'
import './style.css';
import Swicth from '../Swicth';

const Filter = () => (
  <Fragment>
    <div className="">
    <div className="shortcuts">
          <div className="style-filter">
            <p className="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"/></svg>
            Smart filters
            </p>
             </div>
             <div className="row mt-5">
               <div className="col"><Swicth /></div>
             </div>
             <div className="row mt-5">
               <div className="col">
               <div className="style-status">
            <input type="text" placeholder="Search" className="search-filter" />
            <input type="button" value="DELIVERED" className="btn-filter" />
          </div>
               </div>
             </div>
         </div>
      <hr />
    </div>
  </Fragment>
);

export default Filter;