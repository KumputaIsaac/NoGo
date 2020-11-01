import React from 'react'
import {Link} from "react-router-dom";


export default function Shopenter({recipes}) {
    
    return (
        <div>
            <div className="header">
                <div className="flex">
                    <Link to="/homepage">
                        <div className="logo2">
                            Logo
                        </div>
                    </Link>
                    
                    <Link to="/profile">
                        <div className="icon">
                            <i className="fas fa-user"></i>
                        </div>
                    </Link>
                </div>
                
                    <div className="input search">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search Item in this Shop" />
                    </div>
            </div>
            <div className="details first">
                <h2>Brijwasi Sweet House</h2>
                <div className="inline">
                    <p className='address'>Address :</p>
                    <p>100.ft road near cake house<br/> Dayalbagh - 282005</p> 
                </div>
                <div className="inline phone">
                    <p >Phone :</p>
                    <p>9837471222</p> 
                    <p className='green'>Delivering</p> 
                </div>
                <p>Free delivery on this order!</p>{console.log(recipes)}
            </div>
            <div className='check'>
                <input type="button" name="" value="Check Location"/>
            </div>
            <div className='last'>
            {recipes.map((user,i)=>{
                return(
                    <div className='recipe first '>
                        <div className='image'>
                            <img src={recipes[i].recipe.image} key={i} alt=""/>
                        </div>
                        <div className='det'>
                            <p>{recipes[i].recipe.label}</p>
                        
                            <div className='inline bet'> 
                                <div>
                                    <p>1 <br/> ${recipes[i].recipe.ingredients.length}</p>
                                </div>
                                <div>
                                    <input className='number' type="number" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>

            <div className='fixed'>
                <button type="text"> Total price $ 260 <br/> GOTO CART</button>
            </div>
            
            
        </div>
    )
}
