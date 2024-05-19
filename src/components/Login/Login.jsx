import { Link } from "react-router-dom"

import { useRef, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';

import "./Login.css"

const LoginComponent = () => {

    const email = useRef(null);

    const password = useRef(null);

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (email.current.value.trim() === "") {

            return toast.error("Email Field Is Required!");

        }

        if (password.current.value.trim() === "") {

            return toast.error("Password Field Is Required!");

        }

        console.log({ 
            
            email: email.current.value,

            password: password.current.value
        
        });

        email.current.value = "";

        password.current.value = "";

        email.current.focus();

    }

    return (

        <section className="login">

            <div className="container">

                <h2 className="login-title">Login To Your Account</h2>

                <form className="login-form" onSubmit={ handleSubmit }>

                    <ToastContainer 

                        autoClose={ 1000 }
                    
                        position="bottom-right" 
                    
                    />

                    <div className="login-form__input-box">

                        <input 
                        
                            type="email" 
                            
                            placeholder="Email"

                            ref={ email }
                        
                        />

                    </div>

                    <div className="login-form__input-box">

                        {

                            showPassword ? <i 
                        
                                className="bi bi-eye-slash-fill"

                                onClick={ () => setShowPassword(prev => !prev) }
                        
                            ></i> : <i
                        
                                className="bi bi-eye-fill"

                                onClick={ () => setShowPassword(prev => !prev) }
                        
                            ></i>

                        }

                        <input 
                    
                            type={ showPassword ? "text" : "password" }
                            
                            placeholder="Password" 

                            ref={ password }
                
                        />

                    </div>

                    <input type="submit" value="Login" />

                </form>
                
                <div className="login-footer">

                    Dont't have an account ? 
                    
                    <Link to={ "/register" }> Register</Link>
                    
                </div>

            </div>

        </section>

    )

}

export default LoginComponent
