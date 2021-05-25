import React, {useState, useEffect} from 'react'
// import {apartments} from '../mock.js'
import {List} from '../components/ApartmetsList'
import {getUrlRange} from '../config'
import axios from 'axios'

const Home = () => {
    
    const [apartments, setApartments] = useState([]);

    const getApartments = () => {
        axios({
            method: 'GET',
            url: getUrlRange(),
            headers: {'Accept': 'application/json'}
        }).then(response => {
            setApartments(response.data.data)
            // apartments = response;
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
    }
    

    useEffect(getApartments, []);
    
    return <List items={apartments}/>
}

export {Home}

