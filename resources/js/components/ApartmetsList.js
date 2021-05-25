import React from 'react'

import {Card} from '../layout/Card'


const List = (props) => {
    const items = props.items || [];
    
    return (<div className="row">
        {items.map((item) =>
    <Card key={item.id} {...item} />
    )}
    </div>
    );
}

export {List}