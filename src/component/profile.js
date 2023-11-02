import { Switch, TextField } from "@mui/material";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { errorMsg, successMsg } from "./toast";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modify, register } from "../reducers/user";
import Footer from "./footer";

function Profile (){
    const users  = useSelector(state=>state.users.users)
    const dispatch = useDispatch()
    const Navigate =useNavigate()

const handleSubmit=(values)=>{
        console.log(values)
        if ( values.Password.length<=8) return errorMsg("password mast be >=8 charcter")
        if ( values.Password !== values.confirmPassword) return errorMsg("password doesn't match")
        dispatch(modify(values))
        successMsg(`${values.firstName} ${values.lastName}profile has modified `)
            setTimeout(() => {
                Navigate("/")
            }, 1000);
}
    const [disable,setDisable] = useState(true)
    const token =  window.localStorage.getItem('token')
    const user = users.filter(user=>user.email==token)
    console.log(user)
      const formik = useFormik({
        initialValues: {
          firstName: user[0].firstName,
          lastName: user[0].lastName,
          email: user[0].email,
          Password:user[0].Password,
          confirmPassword:user[0].Password

        },
        onSubmit: values => {
          handleSubmit(values)

        },

      });
    //   console.log(formik.values)

    return(
        <>
        <div style={{width:"480px"}} className=" mt-5 d-flex flex-column gap-3 mx-auto p-3 justify-content-center text-uppercase align-items-center  c0l-lg-4 col-md-6 col-xs-12" >
        <h1>Profile</h1>
        <button className={!disable?"disabled btn btn-outline-primary ps-3 pe-3 w-25  ":"btn btn-outline-primary ps-3 pe-3 w-25"  } onClick={()=>setDisable(false)}> edit</button>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">

        <div  className="d-flex  gap-3 ">
        <TextField
          required
          id="outlined-required"
          disabled={disable?true:false}
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
          className='disabled'
          disabled={disable?true:false}
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
          disabled={disable?true:false}
          className='w-100'
          label="email"
          type="email"
          name="email"
          defaultValue="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="d-flex  gap-3 ">
        <TextField
          required
          id="outlined-required"
          disabled={disable?true:false}
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
          disabled={disable?true:false}
          type="password"
          name="confirmPassword"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        </div>
        <div className="d-flex justify-content-center gap-3 flex-wrap ">
        <button className={disable?"disabled btn btn-outline-primary ps-3 pe-3 w-25  ":"btn btn-outline-primary ps-3 pe-3 w-25"} type="submit"> save</button>
        </div>
        </form>
        </div>
        <Footer/>
        </>
    )
}
export default Profile;