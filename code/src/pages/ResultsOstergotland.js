import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { ButtonRow } from 'components/dropdown/ButtonRow';
import { ResponsiveTableGenderOstergotland } from 'components/table/TableOstergotland/ResponsiveTableGenderOstergotland';
import { GenderChartOstergotland } from 'components/charts/ChartsOstergotland/GenderChartOstergotland';
import { ResponsiveTableAgeOstergotland } from 'components/table/TableOstergotland/ResponsiveTableAgeOstergotland';
import { AgeChartOstergotland } from 'components/charts/ChartsOstergotland/AgeChartOstergotland';
import { ResponsiveTableEducationHoursOstergotland } from 'components/table/TableOstergotland/ResponsiveTableEducationHoursOstergotland';
import { CategoryChartOstergotland } from 'components/charts/ChartsOstergotland/CategoryChartOstergotland';



export const ResultsOstergotland  = () => {
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
                        <ResponsiveTableGenderOstergotland />                
                    </section>
                    <section className="image-card">
                        <GenderChartOstergotland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                        <ResponsiveTableAgeOstergotland />               
                    </section>
                    <section className="image-card">
                        <AgeChartOstergotland />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ResponsiveTableEducationHoursOstergotland />               
                    </section>
                    <section className="bigimage-card">
                        <CategoryChartOstergotland />
                    </section>
                </section>
            </article>
        </article>
    </div>
    )
}