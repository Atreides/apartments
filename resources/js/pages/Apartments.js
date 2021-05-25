import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {getUrlUpdateApp} from '../config'

const Apart = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState('');
    
    const getApartments = () => {
        axios({
            method: 'GET',
            url: getUrlUpdateApp(id),
            headers: {'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }).then(response => {
           setApartment(response.data.data)
                      
            console.log(response.data.data.price);
        }).catch(error =>{
            console.log(error);
        })
    };
    useEffect(getApartments, []);
    
    return (<div>
        <h1 >{'Цена: ' + apartment.price + 'руб.'}</h1>
    <div className="collection">
    <a href="#!" className="collection-item active">Характеристики:</a>
    <a href="#!" className="collection-item" >{apartment.rooms}</a>
    <a href="#!" className="collection-item" >{apartment.meters}</a>
    <a href="#!" className="collection-item" >{apartment.address}</a>
  </div>
  <Link to='/' className="waves-effect waves-light btn">На главную</Link>
  </div>)
}

export {Apart}