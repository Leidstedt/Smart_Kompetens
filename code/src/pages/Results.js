import React from 'react';
import { GenderChart } from 'components/charts/GenderChart';
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/cards/card-style.css';
import { AgeChart } from 'components/charts/AgeChart'
import { DropDown } from 'components/dropdown/DropDown';
import { ResponsiveTableGender } from 'components/table/ResponsiveTableGender';
import { ResponsiveTableAge } from 'components/table/ResponsiveTableAge';
import { ResponsiveTableEducationHours } from 'components/table/ResponsiveTableEducationHours';
import { ButtonRow } from 'components/dropdown/ButtonRow';




export const Results  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
            <ButtonRow />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Sammanställt resultat för hela projektet</h1>
                        <p>Här presenteras projketets kvantitativa resultat. I projektets slutrapport finns reflektioner, måluppfyllelse och effektuppföljning.</p>                
                    </section>
                    <section className="image-card">
                        <article className="summary-container">
                             <div className="content-container">
                            <h1 className="summary-title">Resultat</h1>
                            <p>Antal deltagare: 5648</p>
                            <p>Antal företag: 68</p>
                            </div>
                        </article> 
                    </section>
                </section>
                <article>
                <section className="card-wrapper">
                    <section className="card">
                        <h3>Könsfördelning</h3>
                        <ResponsiveTableGender />                
                    </section>
                    <section className="image-card">
                        <GenderChart />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h3>Åldersförddelning</h3>
                        <ResponsiveTableAge />               
                    </section>
                    <section className="image-card">
                        <AgeChart />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h3>Utbildningstimmar</h3>
                        <ResponsiveTableEducationHours />                
                    </section>
                    <section className="bigimage-card">
                        <CategoryChart />
                    </section>
                </section>
                </article>
            </article>
        </div>
    )
}