import React from 'react'
// import  '../index.css';

export default function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between">
      <div className="logo">
        <h1><a href="index.html"><span>e</span>Business</a></h1>
      
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>
    
      
    
  );
}
