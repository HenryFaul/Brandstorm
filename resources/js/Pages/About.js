import React from "react";
import NavBar from "@/Shared/NavBar";
import {Helmet} from "react-helmet/es/Helmet";
import GitHub from "@/Pages/Logos/GitHub";
import Laravel from "@/Pages/Logos/Laravel";
import ReactLogo from "@/Pages/Logos/ReactLogo";
import TailWindCSS from "@/Pages/Logos/TailWindCSS";


export default () => {
  return (
    <>
      <NavBar>
        <Helmet title="About"/>
        <h1 className="text-4xl text-center">About us page</h1>
        <footer className="bg-darker_blue p-10 fixed inset-x-0 bottom-0">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/HenryFaul/Brandstorm">
              <GitHub height={40} width={40}/>
            </a>
            <a href="https://laravel.com/">
              <Laravel height={40} width={40}/>
            </a>
            <a href="https://reactjs.org/">
              <ReactLogo height={40} width={40}/>
            </a>
            <a href="https://tailwindcss.com/">
              <TailWindCSS height={40} width={40}/>
            </a>
          </div>
          <div className="my-6 text-center text-white">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </footer>
      </NavBar>
    </>
  )
}
