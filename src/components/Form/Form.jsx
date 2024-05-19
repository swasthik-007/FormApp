import './Form.css'
import Input from '../Inputs/Inputs';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../../Providers/FormContext';

import emailValidator from '../Helper/emailValidator.js'
import passwordValidator from '../Helper/passwordValidator.js'

function Form(){
    
const {formInput}=useContext(FormContext);


const emailRef=useRef(null);
const passwordRef=useRef(null);


const [step,setStep]=useState(0);


const handleFormSubmit=(event)=>{
            event.preventDefault();
            // we have access to formInput, that means validations can occur here
         
            handleInvalidEmail();
            handleInvalidPassword();
}


const handleInvalidEmail = () =>{
        if(!emailValidator(formInput.email)){
            emailRef.current.setInvalid();
            emailRef.current.shake();
            // console.log("hi");
        }
}   
const handleInvalidPassword = () => {
        if(!passwordValidator(formInput.password)){
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
            // console.log("hi");
        }

}   

if(step==1){

    return (
        <div>
            <br/>
            New Form  <br/>
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
                  
                    <Input
                    id="email-input"
                    type="email" 
                    label="email"
                    ref={emailRef}
                    checkOnBlur={handleInvalidEmail}
                    />
                 </div>

                <div className="wrapper password-input-wrapper">
                
                    <Input 
                    id="password-input"
                    type="password"
                    label="password"
                    ref={passwordRef}
                    checkOnBlur={handleInvalidPassword}
                    />
                </div>

                    <input id='submit-input' type="submit" />
            </form>
    </div>
)
}
}
export default Form;
