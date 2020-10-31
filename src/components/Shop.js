import React from 'react'
import {Link} from "react-router-dom";


export default function Shop() {
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
                        <input type="text" placeholder="Search Shops" />
                    </div>
                
                    <div class="first profile shopp">
                    <Link to="/shopenter">
                        <div class="shop">
                            <h2>Dithonia Foods & Properties</h2>
                            <div class='line'>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>14-B Ashok Vihar, Janak Mahal Crossing,Dayal Bagh</p>
                            </div>
                            <p class="closed"> Closed</p>
                            
                        </div>
                    </Link>
                    <Link to="/shopenter">
                        <div class="shop">
                            <h2>Bake 'o' fy </h2>
                            <div class='line'>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>14-B Ashok Vihar, Janak Mahal Crossing,Dayal Bagh</p>
                            </div>
                            <p class="Open"> Open</p>
                            
                        </div>
                    </Link>
                    <Link to="/shopenter">
                        <div class="shop">
                            <h2>Gyani Dhaba</h2>
                            <div class='line'>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>14-B Ashok Vihar, Janak,Dayal Bagh</p>
                            </div>
                            <p class="Open"> Open</p>
                            
                        </div>
                    </Link>
                    <Link to="/shopenter">
                        <div class="shop">
                            <h2>Anant Krishna Food</h2>
                            <div class='line'>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>14-B Ashok Vihar, Janak Mahal Crossing</p>
                            </div>
                            <p class="Open"> Open</p>
                            
                        </div>
                    </Link>
                    <Link to="/shopenter">
                        <div class="shop">
                            <h2>Brijwasi sweet House</h2>
                            <div class='line'>
                                <i class="fas fa-map-marker-alt"></i>
                                <p>14-B Janak Mahal Crossing,Dayal Bagh</p>
                            </div>
                            <p class="Open"> Open</p>
                            
                        </div>
                    </Link>
                        
                    </div>
                </div>
        </div>
    )
}
