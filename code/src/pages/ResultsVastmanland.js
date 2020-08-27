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
                        <h1>Sammanställt resultat för delprojekt Västmanland</h1>
                        <p>Delprojektet drevs av Region Västmanland i samarbete med Competence, en organisation som arbetar med arbetsmarknads- och kompetensförsörjningsfrågor på både lokal och nationell nivå. I projektet deltog ett 20-tal industriföretag som ser värdet i att satsa på kompetensutveckling.</p>              
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 1612"
                        numCompanies="Företag: 32st"
                        >
                        </SummaryCard>
                    </section>
                </section>
                <article>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Könsfördelning</h1>
                        <ResponsiveTableGenderVastmanland />                
                    </section>
                    <section className="image-card">
                        <GenderChartVastmanland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Åldersförddelning</h1>
                        <ResponsiveTableAgeVastmanland />               
                    </section>
                    <section className="image-card">
                        <AgeChartVastmanland />
                    </section>
                </section>
                <section>
                <section className="big-card">
                        <h1>Utbildningstimmar</h1>
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