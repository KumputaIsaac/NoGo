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
                            <input type="text" placeholder="Phone Number"/>
                        </div>
                        
                        <Link to="/homepage">
                            <div class="login">
                                <input type="button" value="Verify OTP"/>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div class="signup">
                                <div>
                                    Already Have an account? Login
                                </div>
                            </div>
                        </Link>

                        

                    </form>
                </div>
            </div>
        </div>
    )
}
