import React from "react";
import NavBar from "@/Shared/NavBar";
import {Helmet} from "react-helmet/es/Helmet";


export default function Contact(){
  return(
    <NavBar>
      <Helmet title="contact"/>
      <h1>Contact us</h1>
    </NavBar>
  )
}
