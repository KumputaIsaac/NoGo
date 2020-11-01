import React from 'react'
import {Link} from "react-router-dom";
import Logo from './Logo'


export default function Login() {
    return (
        <div>
            <div class="first">
                <div class="logo">
                    <Logo/>
                </div>
                <div class="form">
                    <form action="">
                        <div class="input">
                            <i class="fas fa-hospital-user"></i>
                            <input type="email" placeholder="Email-ID"/>
                        </div>
                        
                        <Link to="/homepage">
                            <div class="login now">
                                <input type="button" value="Reset Password"/>
                            </div>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}
