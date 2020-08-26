import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown'
import { ButtonRow } from 'components/dropdown/ButtonRow'
import { ResponsiveTableGenderUppsala } from 'components/table/TableUppsala/ResponsiveTableGenderUppsala'
import { GenderChartUppsala } from 'components/charts/ChartsUppsala/GenderChartUppsala'
import { ResponsiveTableAgeUppsala } from 'components/table/TableUppsala/ResponsiveTableAgeUppsala'
import { AgeChartUppsala } from 'components/charts/ChartsUppsala/AgeChartUppsala'
import { ResponsiveTableEducationHoursUppsala } from 'components/table/TableUppsala/ResponsiveTableEducationHoursUppsala'
import { CategoryChartUppsala } from 'components/charts/ChartsUppsala/CategoryChartUppsala'




export const ResultsUppsala  = () => {
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
                        <ResponsiveTableGenderUppsala />            
                    </section>
                    <section className="image-card">
                        <GenderChartUppsala />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ResponsiveTableAgeUppsala />               
                    </section>
                    <section className="image-card">
                        <AgeChartUppsala />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ResponsiveTableEducationHoursUppsala />                
                    </section>
                    <section className="bigimage-card">
                        <CategoryChartUppsala />
                    </section>
                </section>
            </article>
        </article>
    </div>
    )
}