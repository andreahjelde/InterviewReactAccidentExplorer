import './Card.css'

const Field = ({title, content})=>{
    return(
        <div className='fieldInfo'>
            <p className='fieldTitle'>{title}</p>
            <p className='fieldContent'>{content}</p>
        </div>
    )
}

export default Field