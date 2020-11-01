import React from 'react'
import {Link} from "react-router-dom";


export default function Profile() {
    return (
        <div>
            <div className="first profile">
                <h2>Your Profile</h2>
                <div className="form">
                    <form action="">
                        <div className="input">
                            <i className="fas fa-hospital-user"></i>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="password">
                            <i className="fas fa-lock"></i>
                            <input type="number" placeholder="Phone Number"/>
                        </div>
                        <div className="select flex">
                            <div><input placeholder="Agra" type="text"/></div>
                            <i className="fas fa-greater-than"></i>
                        </div>
                        <div className="select flex">
                            <div><input placeholder="Dayal Bagh" type="text"/></div>
                            <i className="fas fa-greater-than"></i>
                        </div>
                        <div className="select flex">
                            <div><input placeholder="282005" type="number"/></div>
                            <i className="fas fa-greater-than"></i>
                        </div>
                        <div className="input">
                            <i className="fas fa-map-marker-alt"></i>
                            <input type="text" placeholder="Address"/>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div>  
            
                <Link to="/homepage">
                    <div className="login save now">
                        <input class='please' type="button" value="Save Changes"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}
