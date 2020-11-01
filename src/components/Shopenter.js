import React from 'react'
import {Link} from "react-router-dom";


export default function Shopenter({recipes}) {
    return (
        <div>
            <div class="header">
                <div class="flex">
                    <Link to="/homepage">
                        <div class="logo2">
                            Logo
                        </div>
                    </Link>
                    
                    <Link to="/profile">
                        <div class="icon">
                            <i class="fas fa-user"></i>
                        </div>
                    </Link>
                </div>
                
                    <div class="input search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search Item in this Shop" />
                    </div>
            </div>
            <div class="details first">
                <h2>Brijwasi Sweet House</h2>
                <div class="inline">
                    <p class='address'>Address :</p>
                    <p>100.ft road near cake house<br/> Dayalbagh - 282005</p> 
                </div>
                <div class="inline phone">
                    <p >Phone :</p>
                    <p>9837471222</p> 
                    <p class='green'>Delivering</p> 
                </div>
                <p>Free delivery on this order!</p>{console.log(recipes)}
            </div>
            <div class='check'>
                <input type="button" name="" value="Check Location"/>
            </div>
            {recipes.map((user,i)=>{
                return(
                    <div class='recipe first last'>
                        <div class='image'>
                            <img src={recipes[i].recipe.image} key={i} alt=""/>
                        </div>
                        <div class='det'>
                            <p>{recipes[i].recipe.label}</p>
                        
                            <div class='inline bet'> 
                                <div>
                                    <p>1 <br/> ${recipes[i].recipe.ingredients.length}</p>
                                </div>
                                <div>
                                    <input  class='number' type="number" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div class='fixed'>
                <button type="text"> Total price $ 260 <br/> GOTO CART</button>
            </div>
            
            
        </div>
    )
}
