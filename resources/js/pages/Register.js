import React, {useState} from 'react'
import {URL_NEW_USER} from '../config'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const registration = (e) => {
        e.preventDefault();
        axios({
        method: 'POST',
        url: URL_NEW_USER,
        headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json'},
        data: {
            name,
            surname,
            email,
            password,
            password_confirmation: `${passwordConfirmation}`
        }
    }).then(response => {
        console.log(response);
        localStorage.setItem('token',response.data.data.api_token)
    }).catch(error =>{
        console.log(error);
    })
    }

   return (<div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate" value={name} onChange={(e) => setName(e.target.value)}/>
          <label className="active">First Name</label>
        </div>
        <div className="input-field col s6">
          <input type="text" className="validate" value={surname} onChange={(e) => setSurname(e.target.value)}/>
          <label className="active">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label className="active">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="password" className="validate" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          <label className="active">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label className="active">Email</label>
        </div>
      </div>
      {/* <div className="row">
        <div className="col s12">
          This is an inline input field:
          <div className="input-field inline">
            <input type="email" className="validate" />
            <label className="active">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div> */}
      <a className="waves-effect waves-light btn" onClick={registration}>Зарегистрироваться</a>
    </form>
  </div>)};

  export {Register}