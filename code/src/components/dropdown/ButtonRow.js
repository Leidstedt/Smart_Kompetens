import React from 'react';
import { Link } from 'react-router-dom';
import 'components/dropdown/button-row.css'


export const ButtonRow = () => (
    <section className="btn-navbar-container"> 
        <div className="result-navbar"> 
                        <Link to="/results" exact>
                            <button className="button">Hela projektet</button>
                        </Link>
                        <Link to="/results/sormland" exact>
                            <button className="button">Sörmland</button>
                        </Link>
                        <Link to="/results/uppsala" exact>
                            <button className="button">Uppsala</button>
                        </Link>
                        <Link to="/results/vastmanland" exact>
                            <button className="button">Västmanland</button>
                        </Link>
                        <Link to="/results/orebro" exact>
                            <button className="button">Örebro</button>
                        </Link>
                        <Link to="/results/ostergotland" exact>
                            <button className="button">Östergötland</button>
                        </Link>
            </div>        
    </section>  
)






 
  