import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
register();

function SuggesionProducts({products}){
    const swiperElRef = useRef(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        // console.log(progress);
      });
      
      swiperElRef.current.addEventListener('slidechange', (e) => {
        console.log('slide changed');
      });
    }, []);

    const [availableWidth , setAvailableWidth] = useState(window.innerWidth)
    const [size ,setSize] = useState(window.innerWidth/350)
    const handleWidth = ()=>{
      setAvailableWidth(window.innerWidth)
  
      if (578 < availableWidth <= 778){
        setSize(2)
        // console.log(size)
  
      }
      if(778 <availableWidth){
        setSize(3)
        // console.log(size)
  
      }
      if( availableWidth <= 578 ){
        setSize(1)
        // console.log(size)
      }
      if( availableWidth >= 978 ){
        setSize(5)
        // console.log(size)
      }
    }
  
    useEffect(()=>{
      window.addEventListener('resize' , handleWidth)
      console.log(size,availableWidth)
    }
    ,[availableWidth])
    console.log(products)
    return(
      <div id='skills' className='container text-center p-3 bg-dark-subtle rounded text-light mt-5'  style={{ transform: 'translateY(-50px)'}}>
        <h1 className='text-start  text-dark'>similar products</h1>
        <swiper-container
        ref={swiperElRef}
        slides-per-view={size}
        navigation="true"
        loop= "true"
        className='d-flex justify-content-xl-center w-100'
        >
        {
         products?.map((product,index)=>(
        <swiper-slide className='col-xs-12 col-md-6 col-lg-4'>
            <div key={index} style={{cursor:'pointer'}} className="product-card rounded d-flex flex-column justify-content-center gap-2  bg-light  col-xs-12 col-md-5 col-lg-3 " >
                <Link to={`/product/${product.id}`} className='text-decoration-none text-dark'>
                <div style={{height:"120px"}} >
                <img src={product.thumbnail} className='w-100 h-100 rounded' alt='product img' />
                </div>
                <p className='ps-3 pt-3'> {product.title}</p>
                <p className='ps-3 fw-bold'>{product.price} $</p>
                <p className='ps-3'><Rating name="read-only" value={product.rating} readOnly /></p>
                </Link>
                {/* <button className='btn btn-outline-primary' onClick={()=>dispatch(addToCart(product))}> add to card</button> */}
            </div>
        </swiper-slide>
        ))}
        </swiper-container>
      </div>
    )
}
export default SuggesionProducts;