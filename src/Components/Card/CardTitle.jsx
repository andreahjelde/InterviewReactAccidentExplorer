import './Card.css'

const CardTitle = ({kommunenavn, dato})=>{
    return(
        <section className='cardTitle'>
          <p>{kommunenavn}</p>
          <p>{new Date(dato).toLocaleString()} </p>
        </section>
    )
}

export default CardTitle