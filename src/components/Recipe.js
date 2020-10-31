import React from 'react'

export default function Recipe({image,label}) {
    return (
        <div>
            <div className='card'>
                {console.log(image)}
                <img src={image} alt=""/>
                {label}
            </div>
        </div>
    )
}
