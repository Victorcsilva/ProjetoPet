import React from "react";
import dogs23 from '../components/img/dog22.png'
import '../components/Styled/PublicPage.css';
import { useEffect, useState } from 'react'
import {listPets} from '../services/pets'
import Card from "../components/Layout/Card";

function PublicPage() {
const[data, setdata] = useState ([])

  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        setdata(response.data.pets);
      } catch (error) {
        console.log("Deu Ruim");
      }
    };
    request();
  }, [  ]);

console.log(data)
  
  return <div className="cardpublic" >
    {data.map(element => 
    <Card name={element.name} breed={element.breed} species={element.species} age={element.age}
    gender={element.gender} url={element.url} /> )
    }
    <img src={dogs23} className="Dogs" alt="logo" />
  </div>;
}

export default PublicPage;
