import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return <div className="col s12 m6">
        <h2 className="header">
          {props.city}, {props.address}
        </h2>
        <div className="card horizontal">
        <div className="card-image">
            <img src="" alt=""/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>Метро: {props.metro}</p>
          <p>Кол-во комнат: {props.rooms}</p>
          <p>Метраж: {props.meters}</p>
          <p>Цена: {props.price}</p>
        </div>
        <div className="card-action">
          <Link to={`/apartments/${props.id}`}>Подробнее</Link>
        </div>
      </div>
    </div>
  </div>
}

export {Card}