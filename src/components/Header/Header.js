import React from 'react'
import Navigation from "../Navigation"
import Logo from "../../images/all_saints_pre-school_hw_2016_17009026.png"


import "./Header.css"
export default function Header() {
  return (
         
   
    <div className="col pink lighten-5 s12 m12 l12  head" >
      <img src={Logo}  class="brand-logo center" alt ="logo"/>

        <Navigation/>
      
    </div>
     
  )
}
