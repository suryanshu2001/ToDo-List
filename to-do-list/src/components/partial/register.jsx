/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import e from 'cors';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { register } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from './header';

function Register(user,setUser) {
    const navigation=useNavigate()
    /*useEffect(() => {
        if (user) {
            navigation('/')
            return;
        }
       },[]);*/
   const [form, setform] = useState({
    userName:"",
    name:"",
    password:"",
    email:""
   });


   const handleChange=(e)=>{
     setform({...form,[e.target.name]:e.target.value})
   };

   const [errors, seterrors] = useState(null);

   const handleSubmit=async()=>{
    seterrors(null);
    const result=await register(form);
    console.log(result);

    if( result.data.status===200){
        if(result.data.status===200){
           localStorage.setItem('user',JSON.stringify(result.data.data))
              navigation('/');
              return;
        }
    }
        
    if(result.data.status===202){
        seterrors(result.data.data);
        toast(result.data.message);
        return;
    }   
    if(result.data.status===201){
        seterrors(result.data.data);
        toast(result.data.message);
        return;
    } 
}



  return (
    <>
    <Headers/>
    <ToastContainer/>
      <div className='container'>
        <div className='row justify-content-md-center mt-4'>
            <div className='col-lg-5 card border-primary mb-3'>
                <div className='card-header h4 text-center'>
                    Register Now
                </div>
                <div className="card-body">
                    <div className="form-group">
                    <div className="form-group">
                       <label for="exampleInputUsername" class="form-label mt-4">Username</label>
                       <input 
                       type="string" 
                       className="form-control" 
                       onChange={handleChange}
                       name='userName'
                       id="exampleInputEmail1" 
                       aria-describedby="usernameHelp" 
                       placeholder="Enter Username"
                       />
                       {
                    errors?.userName && (
                        <small id="usernameHelp" className="form-text text-muted">
                        {errors.userName.msg} 
                      </small>
                    )
                }
                     </div>
                     <div className="form-group">
                       <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                       <input 
                       type="email" 
                       className="form-control" 
                       onChange={handleChange}
                       name='email'
                       id="exampleInputEmail1" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"/>
                       {
                    errors?.userName && (
                        <small id="emailHelp" className="form-text text-muted">
                        {errors.email.msg} 
                      </small>
                    )
                }
                     </div>
                     <div className="form-group">
                       <label for="exampleInputName" className="form-label mt-4">Name</label>
                       <input 
                       type="string" 
                       className="form-control" 
                       onChange={handleChange}
                       name='name'
                       id="exampleInputName" 
                       aria-describedby="nameHelp" 
                       placeholder="Enter name"/>
                       {
                    errors?.userName && (
                        <small id="nameHelp" className="form-text text-muted">
                        {errors.name.msg} 
                      </small>
                    )
                }
                     </div>
                     <div className="form-group">
                       <label for="exampleInputPassword" className="form-label mt-4">Password</label>
                       <input 
                       type="password" 
                       className="form-control" 
                       onChange={handleChange}
                       name='password'
                       id="exampleInputPassword" 
                       aria-describedby="passwordHelp" 
                       placeholder="Enter password"/>
                       {
                    errors?.userName && (
                        <small id="passwordHelp" className="form-text text-muted">
                        {errors.password.msg} 
                      </small>
                    )
                }
                     </div>
                     <div className='row justify-content-md-center mt-4'>
                     <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Register;