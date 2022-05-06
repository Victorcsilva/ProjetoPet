import React from "react";
// import { useAuth } from "../../context/auth-context";
// import { useLocation, useNavigate } from "react-router-dom";
import '../Styled/Listpets.css'
import { postsPets } from "../../services/pets";

function Listpets() {
  //const auth = useAuth();
  // const location = useLocation();
  //const navigate = useNavigate();
  //console.log(location);
 // const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    try { event.preventDefault();
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const breed = formData.get("breed");
      const species = formData.get("species");
      const age = formData.get("age");
      const gender = formData.get("gender");
      const url = formData.get("url");
  
      const data = {
        name,
        breed,
        species,
        age,
        gender,
        url,
      };
  
      console.log(data);
      await postsPets (data) 
      //console.log(postsPets)
      
    } catch (error) {
      console.log(error.message)
    }
   

  };

  return (
    <div className="bodyform">
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <label className="text">
          Nome: 
          <input className="inputclass" type="string" name="name" />
        </label>
        <label className="text">
          Raça: 
          <input className="inputclass"type="string" name="breed" />
        </label>
        <label className="text">
         Idade: <input className="inputclass"type="number" name="age" />
        </label>
        <label className="text">Espécie:
             <select name='species' className='inputclass' >
              <option value="Gato">Gato</option>
              <option value="Cachorro">Cachorro</option> 
              </select>
        </label>
        <label className="text"> Gênero:
        <select name='gender'className='inputclass'>
              <option value="Macho">Macho</option>
              <option  value="Fêmea">Fêmea</option> 
              <option  value="naobinario">Não binario</option> 
        </select>
        </label>
        <label htmlFor="image" className="text"> Imagem: 
        <input className='inputclass' type="url" name="url"  />
        </label>
        <button className='allbutton' type="submit" >Enviar</button>
      </form>
    </div>
  );
}

export default Listpets;
