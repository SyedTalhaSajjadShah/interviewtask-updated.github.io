import React from 'react';
import './App.css';

const Quizchapter = () =>{
      return(
            <>
            <div className="container mt-2">
            <h3>Quiz(Chapter 1)</h3>
            <br/>
            <img src="line2.png" alt="not found"/>
            <div className="container  mt-5 box">
            <h4 className="text2 p-5">As a salesperson, what do you sell first on a sale call?</h4>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />The great service or product you are selling</p>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />The reasonable price for the product or service</p>
            <p className= "ml-5"> <img src="circle.png" alt="not found" />Your personality, your style, youtself</p>
            <p className= "ml-5"  ><img src="circle.png" alt="not found"/>The fine reputation of the company you work for</p>
            <button type="button" className="btn btn-secondary ">Previous</button> 
            <button type="button" className="btn btn-primary Next ">Next</button> 
            </div>
            </div>
            </>
      )
}
export default Quizchapter;