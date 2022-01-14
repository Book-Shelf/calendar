import React from 'react';
import {Link} from 'react-router-dom';
import CalendarHeader from '../CalendarHeader';
import "./style.css"

class Login extends React.Component{
    /*constructor(props){
        super(props);
    }*/

    render() {
        return (
        <div>
            <CalendarHeader page="/" />
            <div className='content-wrapper'>
                <div className='header'>Login</div>
                <div className='content'>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='username'>Username:</label>
                            <input type='text' name='username' placeholder='username'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password:</label>
                            <input type='text' name='password' placeholder='password'/>
                        </div>      
                    </div>    
                </div> 
                <div className="footer">
                    <Link to="Calendar">
                        <button type='button' className="button">
                            Login
                        </button>
                    </Link>
                    <Link to="SignUp">
                        <div className='alternative-choice'>
                            Sign up
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        )}
}

export default Login