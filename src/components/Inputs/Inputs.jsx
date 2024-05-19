import React ,{ useContext, useImperativeHandle, useState,useRef, useEffect } from "react";
import { FormContext } from "../../Providers/FormContext";
import './Input.css'
function Input ({type,id,label,checkOnBlur},ref){
 
 
  const {formInput,setFormInput}=useContext(FormContext);
  const [isValid,setIsValid]=useState(true);
  const [shake,setShake]=useState(false)
  const [text,setText]=useState("");
 
  //introduce a local ref // local to component

  const localRef=useRef(null);

  useEffect(()=>{
    setIsValid(true)
    setShake(false)
  },[text])



  useImperativeHandle(ref,()=>{
    return {
      focus: ()=>  localRef.current.focus(),
      setInvalid: ()=> setIsValid(false),
      shake: ()=> setShake(true)
  }
  },[]);
  

  
  return (
        <>
        <input
        className={`${(!isValid)?"error":""} ${(shake)?'shake':  '' }`}
        ref={localRef}
        type={type}
        id={id}
        value={text}
        onBlur={checkOnBlur}
        onChange={(e)=>
        {
          setText(e.target.value)
          setFormInput({...formInput,[label]:e.target.value})}
        
        }
        />
        <br/>
        <span>{(!isValid)? `${label} is invalid`: ''}</span>
        </>
    )
};

export default React.forwardRef(Input);