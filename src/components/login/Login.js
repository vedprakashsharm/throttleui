import React,{useState} from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { toast } from 'react-toastify'
import {logInUser} from '../../api/LoginApi'
import happiest from "../../images/happiness.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [mess, setMess] = useState("");

  const handleSubmit = async (event) => {
    try {
     
      event.stopPropagation()
      event.preventDefault()
      const data = await logInUser({email, pass})
      setMess(data)
    } catch (error) {
      console.log(error)
    }

  }


  if(!isEmpty(mess)&&mess==="your email and password is invalid"){
    toast.error(mess)
  }

  
  if (!isEmpty(mess)&&mess==="Sucess") {
    return <Navigate to="/admin/dashboard" />
  }
  
  return (
    <div class="d-flex align-items-center min-vh-100 bg-auth border-top border-top-2 border-primary">
      <div class="container">
        <div class="align-items-center row">
          <div class="offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0 col-md-6 col-12">
            <div class="text-center">
              <img class="img-fluid" src={happiest} alt="..." />
            </div>
          </div>
          <div class="order-md-1 my-5 col-xl-4 col-md-5 col-12">
            <h1 class="display-4 text-center mb-3">Sign in</h1>
            <p class="text-muted text-center mb-5">
              Free access to our dashboard.
            </p>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                 
                  placeholder="Email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label class="form-label">Password</label>
                  </div>
                  <div class="col-auto">
                    <a
                      class="small text-muted form-text"
                      href="/password-reset"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div class="input-group-merge input-group">
                  <input
                  type="password"
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                 
                  name="password"
                  placeholder="password"
                  required
                    class="form-control"
                  />
                  <span class="input-group-text">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-eye"
                    >
                      <g>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <button  type="submit" class="w-100 mb-3 btn btn-primary btn-lg">
                Sign in
              </button>
              <p class="text-center">
                <small class="text-muted text-center">
                  Don't have an account yet? <a href="/sign-up">Sign up</a>.
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
