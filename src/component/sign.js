import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reducers/user";
import { useFormik } from "formik";
import { errorMsg, successMsg } from "./toast";
import { useState } from "react";

function Sign (){
  const[disabled,setDisabled] =useState(false)
    const users  = useSelector(state=>state.users.users)
    console.log(users)
    const dispatch = useDispatch()
    const Navigate =useNavigate()

const handleSubmit=(values)=>{
        console.log(values)
        const isEmialExist = users.some((user)=>user.email === values.email)
        if(!isEmialExist) return errorMsg("email isn't exist ");
        console.log(values.Password , users[0].Password)
        if ( values.Password !== users[0].Password) return errorMsg("password or email not correct")
        dispatch(login())
        setDisabled=true;
        successMsg(`hello ${users.firstName} ${users.lastName}`)
            setTimeout(() => {
                Navigate("/")
            }, 1000);
}

      const formik = useFormik({
        initialValues: {
          email: '',
          Password:'',

        },
        onSubmit: values => {
          handleSubmit(values)
          

        },

      });
    return(
        <div className="d-flex flex-column gap-3 mx-auto p-3 justify-content-center text-capitalize align-items-center c0l-lg-4 col-md-6 col-xs-12" >
        <h1>Sign in</h1>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">
        <TextField
          required
          id="outlined-required"
          label="email"
          name="email"
          defaultValue="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
                <TextField
          id="outlined-password-input"
          label="Password"
          type="Password"
          name="Password"
          autoComplete="current-password"
          value={formik.values.Password}
          onChange={formik.handleChange}
        />

        <button className={disabled?"btn btn-outline-primary w-50 mx-auto disabled":" btn btn-outline-primary w-50 mx-auto"} type="sumbit"> sign in</button>
        </form>
        </div>

    )
}
export default Sign;