import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const [error, setError]=useState('')
    const{createUser}=useContext(AuthContext)
    const handleSubmit =event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        const confirm = form.confirm.vlaue;
       
        if(password.length <6){
            setError('password should be 6 carecter')
        }
        if(password !== confirm){
            setError('password did not match')
        }

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error=>{
            setError(error)
    })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'> SignUp</h2>
            <form onSubmit={handleSubmit}> 
                    <div className="form-control">
                        <label htmlFor="email">email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' />
                    </div>
                    <input className='btn-submit' type="submit" value="signup" />
                    <p>{error}</p>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;