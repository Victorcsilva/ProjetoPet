import '../Styled/Card.css'

const Card = (props) => {
const {name,breed,species,age,gender,url='',} = props
    return(
        <div className={'card'}>
           <p className='textcard'>Nome:{name}</p>
           <p className='textcard'>Raça:{breed}</p>
           <p className='textcard'>Espécie:{species}</p>
           <p className='textcard'>Idade:{age}</p>
           <p className='textcard'>Genero:{gender}</p>
           <img src={url} className="picture" alt="logo" />
           </div>
           
    )
}


export default Card;