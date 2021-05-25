import React, {useState} from 'react'
import axios from 'axios'
import {URL_NEW_APP} from '../config'
import {Link} from 'react-router-dom'

const AddFlat = () => {
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [metro, setMetro] = useState('');
    const [rooms, setRooms] = useState('');
    const [meters, setMeters] = useState('');
    const [price, setPrice] = useState('');
    const add = (e) => {
        e.preventDefault();
        console.log('test');
        axios({
        method: 'POST',
        url: URL_NEW_APP,
        headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`},
        data: {
            rooms,
            meters,
            city,
            address,
            metro,
            price
        }
    }).then(response => {
        console.log(response);
        
    }).catch(error =>{
        console.log(error);
    })
    }

    return (<div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate" value={city} onChange={(e) => setCity(e.target.value)}/>
          <label className="active">Город</label>
        </div>
        <div className="input-field col s6">
          <input type="text" className="validate" value={address} onChange={(e) => setAddress(e.target.value)}/>
          <label className="active">Адрес</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate" value={metro} onChange={(e) => setMetro(e.target.value)}/>
          <label className="active">Метро</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate" value={rooms} onChange={(e) => setRooms(e.target.value)}/>
          <label className="active">Комнаты</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate" value={meters} onChange={(e) => setMeters(e.target.value)}/>
          <label className="active">Метраж</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate" value={price} onChange={(e) => setPrice(e.target.value)}/>
          <label className="active">Цена</label>
        </div>
      </div>
      <button className="waves-effect waves-light btn" onClick={add}>Добавить</button>
    </form>
  </div>)}

export {AddFlat}