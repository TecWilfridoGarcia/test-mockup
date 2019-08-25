import React, { Fragment, useState } from 'react'
import truck from '../../images/truck.png';
import check from '../../images/check.svg';
import toparrow from '../../images/top-arrow.png';
import './style.css';
import Modal from '../Modal';

const ListRoutes = () => (
  <Fragment>
    <div>
    <div className="row mt-3">
            <div className="col-1 wrapper-check">
              <img className="img-check" src={check} />
            </div>
            <div className="col-11">
              <div className="wrapper-item">
                <div className="row">
                  <div className="col-2 section-1">
                    <p className="text-section">
                      Monday
                      10th 2:28
                      PM
                    </p>
                  </div>
                  <div className="col-3 section-2">
                    <div>
                      <p className="text-section-2">
                        Houston, TX, 33619
                    </p>
                    </div>
                    <div className="content-img">
                      <div className="content-img-send">
                        <img  src={toparrow}/>
                        </div>
                      <div className="content-img-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                      </div>
                      
                    </div>
                    <div>
                      <p className="text-section-2">
                        Atlanta, GA, 30123
                      </p>
                    </div>
                  </div>
                  <div className="col-7 section-3">
                  <div className="row container">
                  <div className="col-3 content-list">
                    <img className="img-car" src={truck} />
                    </div>
                    <div className="col-6 content-list">
                      <p className="item-content">
                        $250.00
                      </p>
                    
                    </div>
                    <div className="col-2 content-list">
                      <p className="item-content">
                        <button className="btn-list"> 1</button>
                      </p>
                    </div>
                    <div className="col-1 content-list">
                      <Modal /> 
                      </div>
                    <div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </Fragment>
);

export default ListRoutes;