import React, { useState } from 'react'
import "./Auth.css";
import img from '../resources/campus-tarapoto.jpg';
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className="bor lg:max-w-4xl">
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className="front">
                        <img src={img} alt="" />
                        <div className='text'>
                            <span className='text-1'>El éxito se basa en tareas bien organizadas</span>
                            <span className='text-2 text-xs'>Vamos a conectarnos</span>
                        </div>
                    </div>
                    <div className="back">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='forms h-full'>
                    <div className='form-content h-full'>
                        <div className='login-form'>
                            logearte
                            <Signin togglePanel={togglePanel}/>

                        </div>
                        <div className='signup-form'>
                            crear tu cuenta
                            <Signup togglePanel={togglePanel}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Auth