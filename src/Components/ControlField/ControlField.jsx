import React, { useState } from 'react';

const ControlField = () => {


    const [name, setName] = useState(' ')
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(' ')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        
        if(password.length < 6){
            setError("Your password is not longer then 6 digit")
        }
        else{
            setError(' ')
        }
    }

  
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length < 6){
        //     setError("Your password is not longer then 6 digit")
        // }
        // else{
        //     setError(' ')
        // }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" onChange={handleNameChange}
                 defaultValue={name}  placeholder='name' />
                 <br />
                <input type="email" onChange={handleEmailChange} defaultValue={email} name='email' id='' placeholder='Email' required />
                <br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name='password' id='' placeholder='Password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>

            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlField;