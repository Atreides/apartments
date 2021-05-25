import React,{useState} from 'react'
import {URL_LOGIN} from '../config'
import axios from 'axios'

const Login = (props) =>{
    const logIn = props.logIn;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logging = (e) => {
        e.preventDefault();
        
        axios({
        method: 'POST',
        url: URL_LOGIN,
        headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`},
        data: {
            email,
            password
        }
    }).then(response => {
        console.log(response);
        localStorage.setItem('token',response.data.data.api_token);
        localStorage.setItem('name',response.data.data.name);
        localStorage.setItem('surname',response.data.data.surname);
        logIn();
    }).catch(error =>{
        console.log(error);
    })
    }

    return (<div className="row">
        <form className="col s12">
        <div className="row">
        <div className="input-field col s12">
          <input type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label className="active">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
                <input type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label className="active">Password</label>
            </div>
        </div>
        <a className="waves-effect waves-light btn" onClick={logging}>Войти</a>
        </form>
        </div>)
}

export {Login}