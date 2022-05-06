import React from "react";
import dog1 from '../img/dogrun.gif'
import dog2 from '../img/dozin.gif'
import '../Styled/Header.css'


function Header() {
  return (

    <div className="back">
      <img src={dog2} className="Dogsolo" alt="logo" />
      <h1>PetList</h1>
      <h2>Cadastre seu Pet!</h2>
      <img src={dog1} className="Dogsrun" alt="logo" />
      </div>
  );
}

export default Header;