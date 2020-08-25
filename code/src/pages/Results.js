import React from 'react';
import { GenderChart } from 'components/charts/GenderChart';
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/cards/card-style.css';
import { AgeChart } from 'components/charts/AgeChart'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { ResponsiveTableGender } from 'components/table/ResponsiveTableGender';
import { ResponsiveTableAge } from 'components/table/ResponsiveTableAge';
import { ResponsiveTableEducationHours } from 'components/table/ResponsiveTableEducationHours';




export const Results  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Sammanställt resultat för hela projektet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 5383"
                        numCompanies="Företag: 68st"
                        >
                        </SummaryCard>
                    </section>
                </section>
                <article>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Könsfördelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ResponsiveTableGender />                
                    </section>
                    <section className="image-card">
                        <GenderChart />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                        <ResponsiveTableAge />               
                    </section>
                    <section className="image-card">
                        <AgeChart />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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