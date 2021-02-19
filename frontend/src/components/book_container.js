import React from 'react'; 

class BookContainer extends React.Component {
  render() {
    return (
      <div class="container features">
          <div id='react'>
          <div class= "row">
            <div class="col-lg-2 col-md-4 col-sm-12">
              <h3 class="feature-title">The Catcher in the Rye is a pile of shit</h3>
              <img src="images/catcherintherye.jpg" class="img-fluid">
              <p>The scourge of GCSE students everywhere.</p>
            </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
            <h3 class="feature-title">Lord of the Flies</h3>
            <img src="images/lordoftheflies.jpg" class="img-fluid">
            <p>Some kids get stuck on a desert island. And kill each other.</p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
            <h3 class="feature-title">Lord of the Rings</h3>
            <img src="images/lordoftherings.jpg" class="img-fluid">
            <p>What about their legs. They're fresh</p>
           </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
            <img src="images/lordoftherings.jpg" class="img-fluid">
            <p>Not the right picture ^^</p>
          </div>
          </div>
            <div class="col-lg-2 col-md-4 col-sm-12">
      
        </div>
      </div>
    </div>
    )
  }
} 

export default BookContainer;