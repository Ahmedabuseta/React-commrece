import { useDispatch, useSelector } from "react-redux";
import { clear, minuseOne, pluseOne, removeFromCart } from "../reducers/cartSlice";
import { Divider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { modify } from "../reducers/user";
import Footer from "./footer";

function Cart(){
    const cart =useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const totalPrice= ()=>{
        let total=7.49;
        cart.map(product=>{
            total+=(product.price*product.quantity)
        })
        return total
    }
    return(
        <>
        <div className="container-lg mt-5 rounded pt-4 d-flex flex-row align-items-center mt-4 bg-light justify-content-between p-3 ">
            <h1>Cart</h1>
            <button className="btn btn-outline-danger" onClick={()=>dispatch(clear())}>clear</button>
        </div>
        <div className="container-lg  d-flex flex-row  flex-wrap  justify-content-center gap-3 p-3">
            <div className=" d-flex flex-column align-items-center  gap-3 flex-wrap p-3"> 
            {
                cart.map(product=>(
                    <div className="d-flex gap-3 bg-light rounded p-3 shadow-sm" style={{width:"500px"}}>
                        <div className="w-25 " style={{height:"150px"}}> 
                            <img src={product.thumbnail} className="w-100 h-100" />
                        </div>
                        <div className="d-flex flex-column w-50 ">
                            <h6>{product.title}</h6>
                            <div className="d-flex p-3  justify-content-start" >
                                <button className="btn bg-primary  p-2 rounded-0" onClick={()=>dispatch(minuseOne(product.id))} style={{transform:'translateX(5px) ' ,zIndex:'222'} } >-</button>
                                <input type="number" inputmode="numeric" min={1} max={product.stcock}    value={product.quantity} className="w-25  text-center no-spinner"  />                                
                                <button className="btn bg-primary  p-2 rounded-0" onClick={()=>dispatch(pluseOne(product.id))} style={{transform:'translateX(-5px) ',zIndex:'222' }} >+</button>
                            </div>
                            <h6>{product.price} $</h6>
                        </div>
                    < div className="d-flex flex-row align-items-center">
                    <button className="btn btn-outline-danger" onClick={()=>dispatch(removeFromCart(product))}>reomove</button>
                    </div>
                    </div>
                ))
            }
            </div>
            <div className="bg-light p-3 d-flex flex-column gap-3  rounded shadow-sm " style={{width:"250px",height:"250px"}}>
                <div className="d-flex justify-content-between">
                    <h5>fees</h5>
                    <h5>2.5$</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>charge</h5>
                    <h5> 4.99$</h5>
                </div>
                <Divider color={dark}/>
                <div className="d-flex justify-content-between">
                    <h4> total price</h4>
                    <h4> {totalPrice()}$</h4>
                </div>
                <button className="btn btn-outline-primary">check out</button>
            </div>
        </div>
        <Footer/>
        </>
        
    )
}
export default Cart;