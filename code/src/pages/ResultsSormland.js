import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { ButtonRow } from 'components/dropdown/ButtonRow';
import { ResponsiveTableGenderSormland } from 'components/table/TableSormland/ResponsiveTableGenderSormland';
import { GenderChartSormland } from 'components/charts/ChartsSormland/GenderChartSormland';
import { ResponsiveTableAgeSormland } from 'components/table/TableSormland/ResponsiveTableAgeSormland';
import { AgeChartSormland } from 'components/charts/ChartsSormland/AgeChartSormland';
import { ResponsiveTableEducationHoursSormland } from 'components/table/TableSormland/ResponsiveTableEducationHoursSormland';
import { CategoryChartSormland } from 'components/charts/ChartsSormland/CategoryChartSormland';



export const ResultsSormland  = () => {
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
                        <ResponsiveTableGenderSormland />                
                    </section>
                    <section className="image-card">
                        <GenderChartSormland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                        <ResponsiveTableAgeSormland />               
                    </section>
                    <section className="image-card">
                        <AgeChartSormland />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ResponsiveTableEducationHoursSormland />                
                    </section>
                    <section className="bigimage-card">
                        <CategoryChartSormland />
                    </section>
                </section>
            </article>
        </article>
    </div>
    )
}