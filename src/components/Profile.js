import React from 'react'
import {Link} from "react-router-dom";


export default function Profile() {
    return (
        <div>
            <div class="first profile">
                <h2>Your Profile</h2>
                <div class="form">
                    <form action="">
                        <div class="input">
                            <i class="fas fa-hospital-user"></i>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div class="password">
                            <i class="fas fa-lock"></i>
                            <input type="number" placeholder="Phone Number"/>
                        </div>
                        <div class="select flex">
                            <div><input placeholder="Agra" type="text"/></div>
                            <i class="fas fa-greater-than"></i>
                        </div>
                        <div class="select flex">
                            <div><input placeholder="Dayal Bagh" type="text"/></div>
                            <i class="fas fa-greater-than"></i>
                        </div>
                        <div class="select flex">
                            <div><input placeholder="282005" type="number"/></div>
                            <i class="fas fa-greater-than"></i>
                        </div>
                        <div class="input">
                            <i class="fas fa-map-marker-alt"></i>
                            <input type="text" placeholder="Address"/>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div>  
            
                <Link to="/homepage">
                    <div class="login save">
                        <input type="button" value="Save Changes"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}
