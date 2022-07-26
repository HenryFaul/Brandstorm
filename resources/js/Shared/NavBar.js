import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import Logo from "@/Shared/Logo";

export default function NavBar({children}){
  return(
    <main>
      <ul className="flex items-center p-6 bg-indigo-200">
        <Logo
        className="mr-10"
        height={40}/>
        <li className="mr-6">
          <InertiaLink href="/" className="block lg:inline-block lg:mt-0 font-medium text-black hover:text-blue-900 mr-4">Home</InertiaLink>
        </li>
        <li className="mr-6">
        <InertiaLink href="/about" className="block lg:inline-block lg:mt-0 font-medium text-black hover:text-blue-900 mr-4">About</InertiaLink>
        </li>
        <li className="mr-6">
          <InertiaLink href="/contact" className="block lg:inline-block lg:mt-0 font-medium text-black hover:text-blue-900 mr-4">Contact</InertiaLink>
        </li>
      </ul>
      <article>{children}</article>
    </main>
  )
}
