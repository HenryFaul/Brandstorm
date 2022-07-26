import React from "react";
import NavBar from "@/Shared/NavBar";
import {Helmet} from "react-helmet/es/Helmet";
import {useForm} from "@inertiajs/inertia-react";


const Registraion = () => {
  const {data, setData, errors, post, processing} = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    owner: '0',
    photo: ''
  });
  return(
    <h1>Welcome</h1>
  )
};

export default Registraion;


