import React from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import Header from "./Header";
import '../Styled/Layout.css'

function Layout() {
  return (
    <>
      <Header/>
     <div className="layout">
        <AuthStatus />
      <div/>
        
       <div>
        <button className='allbutton'>
            <Link to="/">Inicio</Link>
            </button>
            <button className='allbutton'>
            <Link to="/protected"> Cadastrar </Link>
            </button>
            </div>
            </div>
           <Outlet />
    </> 
  );
}

export default Layout;
