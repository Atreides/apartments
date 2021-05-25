import React, {useState, useEffect} from 'react'
import {delUrl, getUrlUpdate, URL_NEW_APP} from '../config'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {String} from '../components/StringInProfile'

const Profile = () =>{
    const [password, setNewPassword] = useState('');
    const [passwordConfirmation, setConfirm] = useState('');
    const [flats, setFlats] = useState('');
    const saveChanges = () => {
        let name = localStorage.getItem('name');
        let surname = localStorage.getItem('surname');
        axios({
        method: 'POST',
        url: getUrlUpdate,
        headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`},
        data: {
            name,
            surname,
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
    const getFlats = () => {
      axios({
        method: 'GET',
        url: URL_NEW_APP,
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        setFlats(response.data.data);
        console.log(response);
      }).catch(error =>{
        console.log(error);
      })

    };
    useEffect(getFlats, []);
    
    return (
      <div>
    <h1>Ваши квартиры:</h1>
    <StringList flats={flats}/>
    
    <div className="row">
        <form className="col s12">
            <Link to= "/addFlat" className="waves-effect waves-light btn" >Добавить квартиру</Link>
        
      <div className="row">
        <div className="input-field col s12">
          <input type="password" className="validate" value={password} onChange={(e) => setNewPassword(e.target.value)}/>
          <label className="active">Новый пароль</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="password" className="validate" value={passwordConfirmation} onChange={(e) => setConfirm(e.target.value)}/>
          <label className="active">Подтвердите старый пароль</label>
        </div>
      </div>
      
      <button className="waves-effect waves-light btn" onClick={saveChanges}>Сохранить изменения</button>
    </form>
  </div>
  </div>)
}
const handleDelete = (id) =>{
  axios({
    method: 'DELETE',
    url: delUrl(id),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    console.log(response);
  }).catch(error =>{
    console.log(error);
  })
};

const StringList = (props) => {
  const flats = props.flats || [];
  
  return (<div className="row">
      {flats.map((flat) =>
  <String key={flat.id} {...flat} {...handleDelete}/>
  )}
  </div>
  );
}

export {Profile}
