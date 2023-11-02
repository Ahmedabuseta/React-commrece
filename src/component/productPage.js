import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProduct } from "../reducers/productsSlice";
import { Container, Rating, Stack } from "@mui/material";
import Carousel from "./productCarousel";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { addToCart } from "../reducers/cartSlice";
import { successMsg } from "./toast";
import SuggesionProducts from "./suggestionProducts";
import { CircleLoader } from "react-spinners";
import Loader from "./loader";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Footer from "./footer";
function ProductPage() {
    let {id} =useParams()
    console.log(id)
    const dispatch =useDispatch()
    const product = useSelector(state=>state.products.chooseProduct)
    const products = useSelector(state=>state.products.all)
    const cart = useSelector(state=>state.cart)
    let displayedProducts =products.filter(ele=>ele?.category?.includes(product.category))
    console.log(displayedProducts);
    // const [oredered ,setOredered ] = useState(false)
    const [loading,setLoading] = useState(true)
    console.log(product,loading)
    // console.log(imgs)
    useEffect(()=>{
        dispatch(fetchProduct(id))
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[id])
    return(
        <>
        {
          loading?<Loader/>:
        <Container>
            <Stack spacing={4} direction={'row'}  className="pt-4 mt-5 flex-wrap gap-3 pt-5 mb-5" justifyContent={'center'}>
                <div style={{height:'400px'}} className="col-xs-12 col-md-4 col-lg-4 ">
                    {
                            <Carousel imgs={product.images}  />
                    }
                    </div>
                <div  className="col-xs-12 col-md-6 col-lg-7">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h4 style={{width:'fit-content'}} className="text-light p-1 rounded-1  bg-danger">{product.discountPercentage}% Discount</h4>
                    <h3 className="text-decoration-line-through d-inline-block me-3 text-secondary">{product.price - (product.price*product.discountPercentage/100)}$</h3>
                    <h3 className="d-inline-block">{product.price}$</h3>
                    <p className=''><Rating name="read-only" value={+product.rating} readOnly /></p>
                    <p className="text-success fw-bolder">stock</p>
                    
                    <button 
                    className="btn btn-outline-primary ps-4 pe-4 "
                    onClick={()=>{
                    
                        dispatch(addToCart(product))
                        successMsg(`${product.title} added to cart`);
                        }
                        }>Add to cart
                    </button>
                    <div className="d-flex p-3 justify-content-start align-items-center gap-2 ">
                        <p className="bg-primary text-light rounded-pill p-0 ps-2 pe-2"> <BookmarkIcon fontSize='small' color='white'/>{product.brand}</p>
                        <p className="bg-primary text-light rounded-pill p-0 ps-2 pe-2"> <BookmarkIcon fontSize='small' color='white'/>{product.category}</p>
                    </div>
                </div>
                <SuggesionProducts products={displayedProducts}/>
            </Stack>
            
            </Container>
}       <Footer/>
        </>

    )
}

export default ProductPage;
