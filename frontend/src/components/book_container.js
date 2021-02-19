import React from 'react'; 

class BookContainer extends React.Component {
  render() {
    return (
    <div className="container features">
      <div id= 'react'>
      <div className= "row">
        <div className= "col-lg-2 col-md-4 col-sm-12">
          <h3 className="feature-title">The Catcher in the Rye</h3>
          <img src="images/catcherintherye.jpg" className="img-fluid"></img>
          <p>The scourge of GCSE students everywhere</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <h3 className="feature-title">Lord of the Flies</h3>
          <img src="images/lordoftheflies.jpg" class="img-fluid"></img>
          <p>Some kids get stuck on a desert island. Hilarity ensues</p>
      </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <h3 className="feature-title">Lord of the Rings</h3>
          <img src="images/lordoftherings.jpg" class="img-fluid"></img>
          <p>What about their legs? They're fresh.</p>
        </div>
      </div>
    </div>
    </div>
    )
  }
} 

export default BookContainer;