import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
  const loggedIn = props.loggedIn;
  const logout = props.logOut;
  // const logout = () => {
  //   return localStorage.removeItem('token');
  // }
  const logged = () => {
    return <nav>
    <div className ="nav-wrapper">
      <Link to="" className ="brand-logo">Apartments</Link>
      <ul id="nav-mobile" className ="right hide-on-med-and-down">
        <li><Link to="/profile">Профиль</Link></li>
        
        <li><button onClick={logout}>Выйти</button></li>
      </ul>
    </div>
  </nav>

  }
  const notLogged = () => {
    return <nav>
    <div className ="nav-wrapper">
      <Link to="" className ="brand-logo">Apartments</Link>
      <ul id="nav-mobile" className ="right hide-on-med-and-down">
        <li><Link to="/register">Регистрация</Link></li>
        
        <li><Link to="/login">Вход</Link></li>
      </ul>
    </div>
  </nav>
  }
  if (loggedIn) {
    return logged();
  }
  return notLogged();
}

export {Header}