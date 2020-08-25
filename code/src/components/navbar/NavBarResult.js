import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/navbar/navbar-result.css'

export const NavBarResult = () => (

  <header className="navbar-result">

    {/* RESULTS */}
    <Route path="/results" exact>
      <p className="current-page">Hela projektet</p>
      <Link to="/results/orebro" exact>
        <p className="nav-hover">Örebro</p>
      </Link>
      <Link to="/results/ostergotland" exact>
        <p>Östergötland</p>
      </Link>
      <Link to="/results/sormland" exact>
        <p>Sörmland</p>
      </Link>
      <Link to="/results/uppsala" exact>
        <p>Uppsala</p>
      </Link>
      <Link to="/results/vastmanland" exact>
        <p>Västmanland</p>
      </Link>
    </Route>

</header>
    
)