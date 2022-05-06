import React from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import "../../App.css"
const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);

  if (!auth.user) {
    return <p className="welcome">Você não está logado.</p>;
  }
  return (
    <p className="welcome">
      Bem vindo {auth.user.name}!{" "}
      <div>
      <button className='allbutton'
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
      </div>
    </p>
  );
};

export default AuthStatus;
