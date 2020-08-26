import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
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
                                <ResponsiveTableGenderOrebro/>                
                            </section>
                            <section className="image-card">
                                <GenderChartOrebro />
                            </section>
                        </section>
                        <section className="card-wrapper">
                            <section className="card">
                                <h1>Åldersförddelning</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                                <ResponsiveTableAgeOrebro />               
                            </section>
                            <section className="image-card">
                                <AgeChartOrebro />
                            </section>
                        </section>
                        <section>
                        <section className="big-card">
                                <h1>Utbildningstimmar</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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