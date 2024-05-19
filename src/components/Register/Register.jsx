import { Link } from "react-router-dom"

import { useRef, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';

import "./Register.css"

const RegisterComponent = () => {

    const username = useRef(null);

    const email = useRef(null);

    const password = useRef(null);

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (username.current.value.trim() === "") {

            return toast.error("Username Field Is Required!");

        }

        if (email.current.value.trim() === "") {

            return toast.error("Email Field Is Required!");

        }

        if (password.current.value.trim() === "") {

            return toast.error("Password Field Is Required!");

        }

        console.log({ 
            
            username: username.current.value,

            email: email.current.value,

            password: password.current.value
        
        });

        username.current.value = "";

        email.current.value = "";

        password.current.value = "";

        username.current.focus();

    }

    return (

        <section className="register">

            <div className="container">

                <h2 className="register-title">Create new account</h2>

                <form className="register-form" onSubmit={ handleSubmit }>

                    <ToastContainer 

                        autoClose={ 1000 }
                    
                        position="bottom-right" 
                    
                    />

                    <div className="register-form__input-box">

                        <input 

                            type="text" 
                            
                            placeholder="Username"

                            ref={ username }

                        />

                    </div>

                    <div className="register-form__input-box">

                        <input 
                        
                            type="email" 
                            
                            placeholder="Email"

                            ref={ email }
                        
                        />

                    </div>

                    <div className="register-form__input-box">

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

                    <input type="submit" value="Register" />

                </form>
                
                <div className="register-footer">

                    Already have an account ? 
                    
                    <Link to={ "/login" }> Login</Link>
                    
                </div>

            </div>

        </section>

    )

}

export default RegisterComponent
