import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" width="150" height="150"></img>
        </a>
        {/*
         <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
         */}
         {/*
        <div className="col-12 col-md-6 col-lg-8 offset-lg-9 offset-md-7 offset-sm-9">
          <form className="form-inline search-form">
            <input className="form-control mr-sm-2" type="search" placeholder="Search author, title, ISBN number... " aria-label="Search"></input>
          </form>
        </div>
        */}
      </nav>
  )}
 }

export default Navigation;
