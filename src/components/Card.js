import React from 'react'
import {Link} from "react-router-dom";


export default function Card({image,title}) {
    return (
        <Link to="/shop">
            <div className='shadow'>
                <div className='card'>
                    <div className='image'>
                        <img src={image} alt=""/>
                    </div>
                    
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
        
    )
}
