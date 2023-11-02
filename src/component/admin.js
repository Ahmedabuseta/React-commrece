import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../reducers/cartSlice"


function Admin(){
   const cart = useSelector(state=>state.cart)
   const dispatch =useDispatch()
    return(
        <div className="container-lg rounded mt-5 pt-4 p-3 d-flex flex-column bg-light justify-content-center gap-3 ">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">price</th>
                <th scope="col">quantity</th>
                <th scope="col">Stock</th>
                <th scope="col" className="tetx">img</th>
                <th scope="col">state</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(product=>(
                        <tr className="p-3 mx-auto">
                        <th scope="row">{product.id}</th>
                        <td >{product.title}</td>
                        <td >{product.price}</td>
                        <td >{product.quantity}</td>
                        <td >{product.stock}</td>
                        <td    className="ps-2 pe-2 d-flex">
                            <img src={product.thumbnail} className="rounded w-25 h-100"/>
                        </td>
                        <td ><button className="btn btn-outline-success ps-3 pe-3 p-2 " onClick={()=>dispatch(removeFromCart(product))}> done</button></td>
                        </tr>
                    ))
                }

            </tbody>
            </table>
        </div>
    )
}

export default Admin