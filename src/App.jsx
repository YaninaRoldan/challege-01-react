import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  return (

    <>
      <div className="content">
        <div className="star-container">
          <div className="circle-star">
            <div className="estrella">
              <img src='../icon-star.png' />
            </div>
          </div>
        </div>
        <div className="title-container">
          <h1>How did we do?</h1>
        </div>
        <div className="p-container">
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve
            our offering!</p>
        </div>

        <Button />
        {/*<div className="btn-submit-container">
          <form id="rateForm" action="./desafio.html" method="get" onSubmit="return submitForm(event)">

            <button className="btn-submit" type="submit" onMouseOver="console.log()">SUBMIT</button>
  </form>
        </div>*/}
      </div>


    </>
  )
}
export default App;