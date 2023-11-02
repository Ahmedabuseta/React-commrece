import { TextField } from "@mui/material";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { errorMsg, successMsg } from "./toast";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../reducers/user";

function Register (){
  const [disabled,setDisabled]=useState(false)
    const users  = useSelector(state=>state.users.users)
    console.log(users)
    const dispatch = useDispatch()
    const Navigate =useNavigate()

const handleSubmit=(values)=>{
        console.log(values)
        if ( values.Password.length<=8) return errorMsg("password mast be >=8 charcter")
        if ( values.Password !== values.confirmPassword) return errorMsg("password doesn't match")
        const isEmialExist = users.some((user)=>user.email === values.email)
        console.log(isEmialExist)
        if(isEmialExist) return errorMsg("email is exist before");
        dispatch(register(values))
        setDisabled=true;
        successMsg(`hello ${values.firstName} ${values.lastName}`)
            setTimeout(() => {
                Navigate("/")
            }, 1000);
}

      const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          Password:'',
          confirmPassword:''

        },
        onSubmit: values => {
          handleSubmit(values)

        },

      });
    //   console.log(formik.values)

    return(
        <div style={{width:"480px"}} className="d-flex flex-column gap-3 mx-auto p-3 justify-content-center text-uppercase align-items-center  c0l-lg-4 col-md-6 col-xs-12" >
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">

        <div  className="d-flex  gap-3 ">
        <TextField
          required
          id="outlined-required"
          label="firstName"
          name="firstName"
          type="text"
          defaultValue="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="lastName"
          name="lastName"
          type="text"
          defaultValue="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        </div>

        <TextField
          required
          id="outlined-required"
          label="email"
          type="email"
          name="email"
          defaultValue="email"
          className="w-100"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="d-flex  gap-3 ">
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="Password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.Password}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="confirmPassword"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        </div>

        <button className={disabled?"btn btn-outline-primary w-50 mx-auto disabled":"btn btn-outline-primary w-50 mx-auto"} type="submit"> sign up</button>
        </form>
        </div>
    )
}
export default Register;