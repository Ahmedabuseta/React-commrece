import React, { useRef, useState } from "react";
import './App.css';
// import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
// import sign from "./sign/sign";
import NavBar from "./component/navBar";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Products from "./component/products";
import Cart from "./component/cart";
import Sign from "./component/sign";
import Register from "./component/register";
import Admin from "./component/admin";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import ProductPage from "./component/productPage";
import Profile from "./component/profile";

function App() {
  // const [todos,setTodos] =useState([])
  // const inputRef = useRef()
  // const handleAppTodo = ()=>{
  //   const text = inputRef.current.value;
  //   const newTodo = {text,complete:false}
  //   setTodos([...todos,newTodo])
  //   inputRef.current.value=""
  //   console.log(text,newTodo.complete)
  // }
  // const handleTodoDone =(index)=>{
  //   const newTodos= [...todos]
  //   newTodos[index].complete =!newTodos[index].complete ;
  //   console.log(newTodos[index].complete)
  //   setTodos(newTodos)
  // }
  // const handleTododelete = (index)=>{
  //   const newTodos= [...todos]
  //   newTodos.splice(index,1) ;
  //   setTodos(newTodos)
  // }
  // return (
  //   <>
  //     <div className="overflow-hidden text-uppercase mx-auto w-50 text-center d-flex flex-column p-3 border border-primary rounded mt-5 gap-3" >
  //       <h2>To Do List</h2>
  //       <ul >
  //         {todos.map(({text,complete},index)=>{
  //           return (
  //             <div className=" app d-flex justify-content-between flex-row align-items-center ">
  //            <li key={index}  className={ complete?"text-decoration-line-through text-muted p-2" : "p-2 text-dark"}   onClick={()=>handleTodoDone(index)}> {text}</li>
  //            <span  onClick={()=>handleTododelete(index)} className="pointe">❌</span>
  //             </div>
  //         )})}
  //       </ul>
  //       <input ref={inputRef} placeholder="enter todos" className="rounded p-2 text-secondary" />
  //       <button onClick={handleAppTodo} className="btn btn-outline-primary rounded" >Add</button>
  //     </div>
  //   </> 
  // );

const user = useSelector(state=>state.users)
  return(
<>
<NavBar />
<ToastContainer />
<Routes>
  <Route path="/" element={<Products/>} />
  <Route path="/cart" element={<Cart/>} />
  {user.online&&<Route path="/profile" element={<Profile/>} />}
  {!user.online&&<Route path="/sign" element={<Sign/>} />}
  {!user.online&&<Route path="/register" element={<Register/>} />}
  {user.online&&user.isAdimn&&<Route path="/admin" element={<Admin/>} />}
  <Route path="/product/:id" element={<ProductPage/>}/>
  <Route path="*" element={<Products/>} />
</Routes>

</>
  )
}

export default App;
