import React from 'react'
import {Link} from 'react-router-dom'

const String = (props) => {
    const {city, metro, address, price, handleDelete, id} = props;
  return <div>
      <p>{city}, {metro}, {address}, {price}</p><Link  style={{cursor:'pointer'}} to={`/apartments/${id}`}><i class="material-icons">remove_red_eye</i></Link><i  style={{cursor:'pointer'}} class="material-icons">attach_file</i><i style={{cursor:'pointer'}} class="material-icons">edit</i><i style={{cursor:'pointer'}} class="material-icons" onClick={() => handleDelete(id)}>delete_forever</i>
  </div>
}

export {String}