import CardTitle from "./CardTitle"
import Field from "./Field"
import './Card.css'

const Card = ({zoomHandler, expandHandler, accident, isOpen})=>{
        return(
            <div className='accidentsCard' onClick={()=>expandHandler(accident.OBJECTID )}>
            <CardTitle kommunenavn={accident.Kommunenavn} dato={accident.Ulykkesdato} />
            {isOpen && 
                <section>
                    <Field content={accident.Antall_enheter} title={"Antall enheter: "}></Field>
                    <Field content={accident.Fartsgrense} title={"Fartsgrense:"}></Field>
                    <Field content={accident.Fylkenavn} title={"Fylke:"}></Field>
                    <Field content={accident.Føreforhold} title={"Førerforhold:"}></Field>
                    <Field content={accident.Kommunenavn} title={"Kommune:"}></Field>
                    <Field content={accident.Lysforhold} title={"Lysforhold:"}></Field>
                    <button className="zoomBtn" onClick={()=>zoomHandler(accident)}>Zoom til lokasjon</button>
                </section>
            }
        </div>
        )
}

export default Card