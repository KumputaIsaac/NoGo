import React from 'react'
import {Link} from "react-router-dom";
import Card from './Card'


export default function Homepage({getChange,passSearch,recipes}) {
    
    return (
       
        <div>
            <div class="header">
                <div class="flex">
                <Link to="/homepage">
                    <div class="logo2">
                        LOGO
                    </div>
                </Link>
                    
                    <Link to="/profile">
                        <div class="icon">
                            <i class="fas fa-user"></i>
                        </div>
                    </Link>
                </div>
                <form onSubmit={passSearch}>
                    <div class="input search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="search items" onChange={getChange} />
                    </div>
                </form>
                
            </div>
            <div className='all'>
                {recipes.map((user,i)=>{
                    return(
                        <Card key={i} image={recipes[i].recipe.image} title={recipes[i].recipe.label}/>
                    )
                })}
            </div>
                
            
        </div>
    )
}
