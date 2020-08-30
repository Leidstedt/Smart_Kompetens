import React from 'react'
import 'components/cards/card-style.css'
import { DropDown } from 'components/dropdown/DropDown';
import { ButtonRow } from 'components/dropdown/ButtonRow';
import { GenderChartOrebro } from 'components/charts/ChartsOrebro/GenderChartOrebro';
import { AgeChartOrebro } from 'components/charts/ChartsOrebro/AgeChartOrebro';
import { CategoryChartOrebro } from 'components/charts/ChartsOrebro/CategoryChartOrebro'
import { ResponsiveTableGenderOrebro } from 'components/table/TableOrebro/ResponsiveTableGenderOrebro';
import { ResponsiveTableAgeOrebro } from 'components/table/TableOrebro/ResponsiveTableAgeOrebro';
import { ResponsiveTableEducationHoursOrebro } from 'components/table/TableOrebro/ResponsiveTableEducationHoursOrebro';





export const ResultsOrebro  = () => {
    return (
            <div>
                <article className="page-wrapper">
                    <DropDown />
                    <ButtonRow />
                        <section className="card-wrapper">
                            <section className="card">
                                <h1>Sammanställt resultat för delprojekt Örebro</h1>
                                <p>Region Örebro läns delprojekt drivs i huvudsak av Karlskoga kommun tillsammans med Yrkeshögskolan. Kommunen samverkar med ett 20-tal industriföretag från olika branscher i Örebro län som ser kompetensförsörjning som en viktig fråga inför framtiden.</p>
                            </section>
                            <section className="image-card">
                            <article className="summary-container">
                                <div className="content-container">
                                    <h1 className="summary-title">Resultat</h1>
                                    <p>Antal deltagare: 2321</p>
                                    <p>Antal företag: 29</p>
                                </div>
                            </article>
                            </section>
                        </section>
                        <article>
                        <section className="card-wrapper">
                            <section className="card">
                                <h1>Könsfördelning</h1>
                                <ResponsiveTableGenderOrebro/>                
                            </section>
                            <section className="image-card">
                                <GenderChartOrebro />
                            </section>
                        </section>
                        <section className="card-wrapper">
                            <section className="card">
                                <h1>Åldersförddelning</h1>
                                <ResponsiveTableAgeOrebro />               
                            </section>
                            <section className="image-card">
                                <AgeChartOrebro />
                            </section>
                        </section>
                        <section>
                        <section className="big-card">
                                <h1>Utbildningstimmar</h1>
                                <ResponsiveTableEducationHoursOrebro />                
                            </section>
                            <section className="bigimage-card">
                                <CategoryChartOrebro />
                            </section>
                        </section>
                    </article>
                </article>
            </div>
    )
}