import React from 'react'
import 'components/cards/card-style.css'
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
                        <h1>Sammanställt resultat för delprojekt Sörmland</h1>
                        <p>I Region Sörmland är det Vuxenutbildningen i Eskilstuna kommun som drivit projektet. Totalt deltar sex elektronikföretag som vill satsa på kompetensförsörjning och utveckling av sin personal.</p>
                    </section>
                    <section className="image-card">
                        <article className="summary-container">
                                <div className="content-container">
                                    <h1 className="summary-title">Resultat</h1>
                                    <p>Antal deltagare: 216</p>
                                    <p>Antal företag: 6</p>
                                </div>
                            </article>
                    </section>
                </section>
                <article>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Könsfördelning</h1>
                        <ResponsiveTableGenderSormland />                
                    </section>
                    <section className="image-card">
                        <GenderChartSormland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <ResponsiveTableAgeSormland />               
                    </section>
                    <section className="image-card">
                        <AgeChartSormland />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
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