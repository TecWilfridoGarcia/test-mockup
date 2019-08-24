import React, { Fragment, useState } from 'react'
import car from '../../images/car.svg';
import check from '../../images/check.svg';
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
                    <div>
                      flecha
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
                    <img className="img-car" src={car} />
                    
                    </div>
                    <div className="col-6 content-list">
                      <p className="item-content">
                        $250.00
                      </p>
                    
                    </div>
                    <div className="col-2 content-list">
                      <p className="item-content">
                        btn
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