
import { useState } from 'react';
import './App.css'
import { FormContext } from './Providers/FormContext';
import Form from './components/Form/Form'
function App() {
const [formInput,setFormInput]=useState({email:'',password:''});
  return (
    <>
      <FormContext.Provider value={{formInput,setFormInput}}>
      <Form/>
        </FormContext.Provider> 
    </>
  )
}

export default App;
