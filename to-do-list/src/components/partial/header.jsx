import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function Headers() {
  const navigation=useNavigate()
  const [user, setUser] = useState(null)
    useEffect(() => {
        const u=localStorage.getItem('user')
        setUser(u);
       },[user]);

  const handleLogout=()=>{
    localStorage.clear()
    if (!user) {
      navigation('/Login')
      console.log(" logout")
      return;
      }
     }
  
    return( 
      <>
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">TO-DO LIST</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">HOME
              <span className="visually-hidden">(current)</span>
            </Link>
          </li>
          {!user && <li className="nav-item">
            <Link className="nav-link" to="/Register">REGISTER</Link>
          </li>
          }
          {!user &&<li className="nav-item">
            <Link className="nav-link" to="/Login">LOGIN</Link>
          </li>
          }
          {
            user && <li className="nav-item">
            <Link className="nav-link" onClick={handleLogout} >LOGOUT</Link>
          </li>
          }
          
          </ul>
          </div>
      </div>
      </nav>
      </>
      );
}
export default Headers;