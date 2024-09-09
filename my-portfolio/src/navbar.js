import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="About.js">Tanishqa Soni</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="About.js">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Projects.js">My Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contact.js">Contact Me</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </input> */}
          </form>
          
        </div>
      </div>
    </nav>
    </nav>
    );
};

export default Navbar;