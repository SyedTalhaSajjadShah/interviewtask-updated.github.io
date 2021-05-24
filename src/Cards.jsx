import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const Cards = () => {
  return (
    <>
    <br />
    <div className="main">
      <div className="container-fluid">
        <div className="row d-flex justify-content-space-between ">
          <div className="col-4 ">
            <div className="card">
              <img
                className="card-img-top"
                src="backend.png"
                alt="not fount"
              />
              <div className="card-body rounded">
                <h5 className="card-title">Chapter 1</h5>
                <h5>What is backend?</h5>
                <p className="card-text">Loreum ipsum........</p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                className="card-img-top"
                src="frontend.png"
                alt="not found"
              />
              <div class="card-body">
                <h5 class="card-title">Chapter 2</h5>
                <h5>What is FrontEnd?</h5>
                <p class="card-text">
                Loreum ipsum........
                </p>
                <NavLink to="#" class="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-4  ">
            <div className="card" style={{ width: "18rem;" }} >
              <img className="card-img-top" src="full stack.png" alt="not found" />
              <div className="card-body">
                <h5 className="card-title">Chapter 3 </h5>
                <h5>What is FUll Stack?</h5>
                <p className="card-text">
                Loreum ipsum........
                </p>
                <NavLink to="#" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cards;
