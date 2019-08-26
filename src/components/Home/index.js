import React, { Fragment } from 'react'
import './style.css';
import ListRoutes from '../ListRoutes';
import check from '../../images/check.svg';
import Modal from '../Modal';

const Home = () => (
  <Fragment>
    <div>
      <div className="row">
        <div className="col-12 content">
          <div className="content-item">
            <div className="row justify-content-between">
              <div className="col-6 wrapper-check-item">
              <div className="col-1 wrapper-check">
              <img className="img-check" src={check} />
            </div>
              </div>
              <div className="col-6 col-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <input type="text" placeholder="Search" className="search-item" />
              </div>
            </div>
          </div>
          <ListRoutes/>
          <ListRoutes/>
          <ListRoutes/>
        </div>
      </div>
      <div className="addItem">
          <Modal />
      </div>
    </div>
  </Fragment>
);

export default Home;


