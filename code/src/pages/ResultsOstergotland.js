import React from 'react'
import 'components/cards/card-style.css'
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
                        <h1>Sammanställt resultat för delprojekt Östergötland</h1>
                        <p>Östergötlands delprojekt drevs av Skill, ett bolag som ägs av industriföretag, kommuner och Region Östergötland. I Östergötland medverkade åtta olika företag som tycker ser kompetensutveckling som en nyckel för att stärka både personalen och företaget i stort.</p>              
                    </section>
                    <section className="image-card">
                        <article className="summary-container">
                            <div className="content-container">
                                <h1 className="summary-title">Resultat</h1>
                                <p>Antal deltagare: 1084</p>
                                <p>Antal företag: 8</p>
                             </div>
                        </article>
                    </section>
                </section>
                <article>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Könsfördelning</h1>
                        <ResponsiveTableGenderOstergotland />                
                    </section>
                    <section className="image-card">
                        <GenderChartOstergotland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <ResponsiveTableAgeOstergotland />               
                    </section>
                    <section className="image-card">
                        <AgeChartOstergotland />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
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