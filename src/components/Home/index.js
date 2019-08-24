import React, { Fragment } from 'react'
import './style.css';
import ListRoutes from '../ListRoutes';


const Home = () => (
  <Fragment>
    <div className="">
      <div className="row">
        <div className="col-12 content">
          <div className="content-item">
            <div className="row justify-content-between">
              <div className="col-6 wrapper-check-item"></div>
              <div className="col-6 col-search">
                <input type="text" placeholder="Search" className="search-item" />
              </div>
            </div>
          </div>
          <ListRoutes/>
          <ListRoutes/>
          <ListRoutes/>
        </div>
      </div>
      <hr />
    </div>
  </Fragment>
);

export default Home;


