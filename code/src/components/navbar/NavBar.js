import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/navbar/navbar.css'

export const NavBar = () => (

  <header className="navbar">


{/* HOMEPAGE */}
<Route path="/" exact>
  <p className="current-page">Start</p>
  <Link to="/results" exact>
    <p className="nav-hover">Resultat</p>
  </Link>
  <Link to="/stories" exact>
    <p>Sagt om projketet</p>
  </Link>
</Route>


{/* RESULTAT */}
<Route path="/results">
  <Link to="/" exact>
    <p>Start</p>
  </Link>
  <p className="current-page">Resultat</p>
  <Link to="/stories" exact>
    <p>Sagt om projketet</p>
  </Link>
</Route>


{/* STORIES */}
<Route path="/stories">
  <Link to="/" exact>
    <p>Start</p>
  </Link>
  <Link to="/results" exact>
    <p>Resultat</p>
  </Link>
  <p className="current-page">Sagt om projketet</p>
</Route>

  </header>
)