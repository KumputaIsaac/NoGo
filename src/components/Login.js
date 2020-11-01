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
                        <div class="password">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <Link to="/homepage">
                            <div class="login now">
                                <input type="button" value="Login"/>
                            </div>
                        </Link>
                        
                        <Link to='/forget'>
                            <div class="forget now">
                                <input type="button" value="Forgot Password"/>
                            </div>
                        </Link>

                        <Link to='/register'>
                            <div class="signup">
                                <div>
                                    Dont Have an account? sign up
                                </div>
                            </div>
                        </Link>
                        
                        

                    </form>
                </div>
            </div>
        </div>
    )
}
