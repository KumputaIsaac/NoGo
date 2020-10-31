import React from 'react'
import {Link} from "react-router-dom";


export default function Shopenter() {
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
                
                    <div class="input search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search Item in this Shop" />
                    </div>
            </div>
            
        </div>
    )
}
