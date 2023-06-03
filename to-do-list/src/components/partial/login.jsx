/* eslint-disable react-hooks/exhaustive-deps */
import e from 'cors';
import React, { useState ,useEffect} from 'react';
import { login } from '../../services/api.js';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from './header.jsx';


function Login({user,setUser}) {
    console.log("user",user)
    const navigation=useNavigate()
    useEffect(() => {
        if (user) {
            navigation('/')
            return;
        }
       },[user]);
   const [form, setform] = useState({
    userName: "",
    password: "",
   });

   
   

  
  const [errors, seterrors] = useState(null);

  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  };
  const handleSubmit=async()=>{
        seterrors(null);
        const result=await login(form);
        console.log(result);
    
        if( result.status===200){
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

  return (  <> <Headers/> 
    <div className="container">
        <ToastContainer/>
  <div className="row justify-content-center mt-4">
    <div className="col-lg-5 card border-primary mt-4">
      <div className="card-body">
        <div className="card-title">Login Now</div>
        <div className="card-body">
          <form>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Username
                </label>
                <input
                  type="string"
                  onChange={handleChange}
                  name='userName'
                  className="form-control"
                  id="exampleInputUserName"
                  aria-describedby="userNameHelp"
                  placeholder="Enter Username"
                />
                {
                    errors?.userName && (
                        <small id="usernameHelp" className="form-text text-muted">
                        {errors.userName.message} 
                      </small>
                    )
                }
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword" className="form-label mt-4">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name='password'
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="passwordHelp"
                  placeholder="Enter password"
                />
                {
                    errors?.password && (
                        <small id="passwordHelp" className="form-text text-muted">
                        {errors.password.message} 
                      </small>
                    )
                }
              </div>
              <div>
                <button 
                type="button" 
                onClick={handleSubmit}
                className="btn btn-primary">Submit</button>
                </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</div></>
  )
}

export default Login