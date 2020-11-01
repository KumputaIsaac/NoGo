import React, { useEffect,useState } from 'react'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import Shop from './components/Shop'
import Forget from './components/Forget'
import Register from './components/Register'
import Shopenter from './components/Shopenter'
import './App.css'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";




export default function App() {

  const APP_ID = '0d8202da'
  const APP_KEY ='236550a6a57279096db08f5356ce7b59'

 


  const [recipes,setRecipe] = useState([])
  const [search,setSearch] = useState("")
  const [query,setQuery] = useState("chicken")

  useEffect(()=>{
    async function getRecipes() {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipe(data.hits)
  }
    getRecipes()
  },[query])

  

  const getChange =(e)=>{
    setSearch(e.target.value)
  }

  const passSearch=(e)=>{
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div className='pc'>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Homepage">
            <Homepage recipes={recipes}  passSearch={passSearch} getChange={getChange}/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/shopenter">
            <Shopenter recipes={recipes}/>
          </Route>
          <Route path="/forget">
            <Forget />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <div>
          
          
        </div>
      </Router>
    </div>
  )
}

  