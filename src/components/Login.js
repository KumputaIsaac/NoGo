import React from 'react'
import {Link} from "react-router-dom";


export default function Login() {
    return (
        <div>
            <div class="first">
                <div class="logo">
                    NOGO
                </div>
                <div class="form">
                    <form action="">
                        <div class="input">
                            <i class="fas fa-hospital-user"></i>
                            <input type="email" placeholder="Email-ID"/>
                        </div>
                        <div class="password">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <Link to="/homepage">
                            <div class="login">
                                <input type="button" value="Login"/>
                            </div>
                        </Link>
                        
                        <div class="forget">
                            <input type="button" value="Forgot Password"/>
                        </div>
                        <div class="signup">
                            <div>
                                Dont Have an account? sign up
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
