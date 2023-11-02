import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import logo from '../assest/img/13763771_5350890.svg'
import { useDispatch, useSelector } from "react-redux";
import user, { logout } from "../reducers/user";
import avatar from '../assest/img/2150793877.jpg'
import * as React from 'react';

function NavBar() {
    const user =useSelector(state=>state.users)
    console.log(user)
    let cart = useSelector(state=>state.cart)
    console.log(cart)
    const dispatch = useDispatch
    const quantity = ()=>{
        let counter =0
        cart.map(product=>{
           counter+=product.quantity;
        })
        console.log(counter)
        return counter
    }
  return(
    <nav className="navbar  navbar-expand-sm bg-dark border-bottom border-body p-0  fixed-top " data-bs-theme="dark">
    <div className="container-fluid d-flex  justify-content-between ">
    <Link className="navbar-brand d-flex  gap-3 align-items-center flex-row" to='/'>
        <img src={logo}  style={{width:'50px'}} />
        <span className="text-uppercase text-light fs-3 ms-2 p-2" ><span className="text-primary" >high</span>tech</span>
    </Link>
    <ul className="navbar-nav d-flex  justify-content-end gap-3 align-items-center flex-row">
   
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={avatar} style={{width:'50px',height:'45px'}} className="rounded-circle"/>
            </a>
            <ul className="dropdown-menu" style={{transform:'translateX(-30px)'}}>
                <li>
                    {user.online&& <Link to="/profile" className="dropdown-item text-decoration-none ">profile</Link>}
                </li>
                <li>
                    {user.isAdimn&&<Link to="/admin" className=" dropdown-item text-decoration-none"> admin page</Link>}
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                    {user.online&& <Link to="/" className="dropdown-item text-decoration-none btn btn-outline-danger" onClick={()=>dispatch(logout())}> log Out</Link>}
                </li>
                <li>
                    {!user.online&& <Link to="/sign" className="dropdown-item text-decoration-none"> sign in</Link>}
                </li>
                <li>
                    {!user.online&& <Link to="/register" className=" dropdown-item text-decoration-none "> sign up</Link>}
                </li>
            </ul>
            </li>
        <li className="nav-item">
            <Link to="/cart" classNameName="text-decoration-none ">
                <Badge badgeContent={quantity()} color="info">
                <ShoppingCartOutlinedIcon/>
                </Badge>
            </Link>      
        </li> 
        </ul>
    </div>
    </nav>
  );
}
export default NavBar;