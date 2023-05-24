import React from 'react'
import bgImg from '../login/logo.jpg'
import { useForm } from 'react-hook-form';
import "./login.css";
import { Link } from "react-router-dom";

export default function Form() {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-2">
               <img src={bgImg} alt="" />
            </div>
            <div className="col-1">
                <h2>Login</h2>
                <span>Enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <span>Username</span>
                    <input type="text" {...register("username")} placeholder='Masukkan username' />
                    <span>Password</span>
                    <input type="text" {...register("password")} placeholder='Masukkan password' />
                    <Link to="/dashboard">
                    <button className="loginButton">Login</button>
                    </Link>
                </form>

            </div>
        </div>
    </section>
  )
}