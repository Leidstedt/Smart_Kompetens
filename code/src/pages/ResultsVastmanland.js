import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { ButtonRow } from 'components/dropdown/ButtonRow';
import { ResponsiveTableGenderVastmanland } from 'components/table/TableVastmanland/ResponsiveTableGenderVastmanland';
import { GenderChartVastmanland } from 'components/charts/ChartsVastmanland/GenderChartVastmanland';
import { ResponsiveTableAgeVastmanland } from 'components/table/TableVastmanland/ResponsiveTableAgeVastmanland';
import { AgeChartVastmanland } from 'components/charts/ChartsVastmanland/AgeChartVastmanland';
import { ResponsiveTableEducationHoursVastmanland } from 'components/table/TableVastmanland/ResponsiveTableEducationHoursVastmanland';
import { CategoryChartVastmanland } from 'components/charts/ChartsVastmanland/CategoryChartVastmanland';




export const ResultsVastmanland  = () => {
    return (
        <div>
        <article className="page-wrapper">
            <DropDown />
            <ButtonRow />
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
                        <ResponsiveTableGenderVastmanland />                
                    </section>
                    <section className="image-card">
                        <GenderChartVastmanland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                        <ResponsiveTableAgeVastmanland />               
                    </section>
                    <section className="image-card">
                        <AgeChartVastmanland />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ResponsiveTableEducationHoursVastmanland />               
                    </section>
                    <section className="bigimage-card">
                        <CategoryChartVastmanland />
                    </section>
                </section>
            </article>
        </article>
    </div>
    )
}