import React from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";
import dogs24 from '../components/img/dogs23.png'
import Listpets from "../components/pets/Listpets";
import '../components/Styled/ProtectPage.css'

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        console.log(response.data.pets);
      } catch (error) {
        console.log("Deu Ruim");
      }
    };
    request();
  }, []);

  return <div className="body1">
    <div><Listpets/></div>
    

  <img src={dogs24} className="Dogs4" alt="logo" />
  
  </div>;
}

export default ProtectedPage;
