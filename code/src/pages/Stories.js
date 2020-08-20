import React from 'react'
import { StoryCard} from "components/cards/StoryCard"

export const Stories  = () => {
    return (
    <article className="page-wrapper">
            <section className="story-card-title">
                <h1>Sagt om projketet</h1>
            </section>
            <section className="story-card-wrapper">
                    <div>
                        <StoryCard
                            coverImage="../../assets/Gruppbild-av-ingenjoerer-i-fabrik.jpg"
                            title="Ökat engagemang hos medarbetarna när alla samma förutsättningar och samma grund att stå på"
                            secondaryText="Heléne Alm, HR-specialist"
                            supportingText="”Det är en jättechans att vi får delta i det här projektet. Vi har fått bra stöd och kunnat forma utbildningsinsatserna precis efter våra behov. Vi märker av en tydlig ökning i engagemang hos medarbetarna när så många får samma förutsättningar och samma grund att stå på genom utbildning. Den här satsningen har gjort att kompetensutveckling är ännu mer prioriterat för oss. Vi tänker till kring vad vi behöver för kompetens idag, och vad vi behöver för morgondagen. Det handlar om att vara redo för framtida utmaningar och att bygga en tro på företaget och på en ljus framtid.”">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            coverImage="../../assets/ledarskapsutbildning.jpg"
                            title="Genom att satsa på individernas utveckling, satsar vi också på företagets utveckling"
                            secondaryText="Fredrik Ahl, leverantörsutvecklare och Lean-koordinator"
                            supportingText="”Vi kombinerade vår egen praktiska utbildning med teori, vilket gör att medarbetarna får en bra grund. Vi hade inställningen att alla som ville delta i utbildningarna, skulle få göra det. Och det lyckades vi bra med. Vi tror på kompetensutveckling och att det stärker vår konkurrenskraft. Genom att satsa på individernas utveckling, så satsar vi också på företagets utveckling.">
                        </StoryCard>
                    </div>
            </section>
            <section className="story-card-wrapper">
                    <div>
                        <StoryCard
                            title="”Vi har valt att fokusera på mjuka värden snarare än på tekniska kompetenser. Om man ska förändra attityder och kultur så handlar det om att få med sig människorna och gruppen.”">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            title="”Vi har valt att fokusera på mjuka värden snarare än på tekniska kompetenser. Om man ska förändra attityder och kultur så handlar det om att få med sig människorna och gruppen.”">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            title="”Fler personer har blivit mer medvetna och vill också fortsätta förkovra sig vidare, vilket utvecklar både individer och vår verksamhet.”">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            title="”Projektet har sporrat flera att vilja gå utbildning, när de ser att andra ”fått gå”, och att vi har fått vara med och bestämma innehållet så blir det så nära skräddarsytt man kan komma.”">
                        </StoryCard>
                    </div>
                    <div>
                        <StoryCard
                            title="”Det har krävt mycket av oss som företag i form av resurser och minskade produktionstimmar och övertidsersättning, men det har varit värt det i min mening.”">
                        </StoryCard>
                    </div>
            </section>
    </article>
    )
}
