import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import dog3 from '../components/img/dg3.png'
import '../components/Styled/Login.css'


function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };
    auth.login(data, () => {
      navigate(from);
    });
    console.log(data);
  };

  return (
    <div className="backlogin">
      <form className= 'formlogin' onSubmit={handleSubmit}>
        
        <label className="text">
          E-mail: <input input className= 'inputclasslogin' type="email" name="email" />
        </label>
        <label className="text">
          Senha: <input className= 'inputclasslogin' type="password" name="password" />
        </label>
        <div>
        <button className='button' type="submit">Enviar</button>
        </div>
      </form>
      <div className="divimg">
      <img src={dog3} className="Dog" alt="logo" />
      <img src={dog3} className="pata" alt="logo" />
      </div>
    </div>
  );
}

export default Login;
