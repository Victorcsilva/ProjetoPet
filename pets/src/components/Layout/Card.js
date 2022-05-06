import '../Styled/Card.css'

const Card = (props) => {
const {name,breed,species,age,gender,url='',} = props
    return(
        <div className={'card'}>
           <p>Nome:{name}</p>
           <p>Raça:{breed}</p>
           <p>Espécie:{species}</p>
           <p>Idade:{age}</p>
           <p>Genero:{gender}</p>
           <p>Foto:{url}</p>
           </div>
           
    )
}


export default Card;