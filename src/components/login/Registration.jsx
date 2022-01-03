import React from 'react';
import "./style.css"

class Registration extends React.Component{
    /*constructor(props){
        super(props);
    }*/

    render() {
        return <div className='content-wrapper'>
            <div className='header'>Registration</div>
            <div className='content'>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' placeholder='username'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>E-mail:</label>
                        <input type='email' name='email' placeholder='email'/>
                    </div> 
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='text' name='password' placeholder='password'/>
                    </div>      
                </div>    
            </div> 
            <div className="footer">
                <button type='button' className="button">
                    Sign up
                </button>
                <div className='alternative-choice'>
                    Login
                </div>
            </div>
        </div>
    }
}

export default Registration