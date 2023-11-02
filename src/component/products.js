
import { useDispatch, useSelector } from 'react-redux';
import photo from '../download.jpg'
import { useEffect, useState } from 'react';
import { fetchProducts, fetchcategories } from '../reducers/productsSlice';
import { addToCart } from '../reducers/cartSlice';
import { FormControl, InputLabel, MenuItem, Rating, Select, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './footer';
function Products(){

    const products = useSelector(state=>state.products.all)
    const categories = useSelector(state=>state.products.category)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
        dispatch(fetchcategories())
    }
        ,[])
        console.log(products)
        const [category, setCate] = useState('');
        const [search,setSearch] = useState('')

        const handleChange = (event) => {
          setCate(event.target.value);
        };
        let displayedProducts = products;
        if(category !=="All Products"){
            displayedProducts =displayedProducts.filter(ele=>ele?.category?.includes(category))
        }
        if(search){
            displayedProducts =displayedProducts.filter(ele=>ele.title.toLowerCase().includes(search.toLowerCase()) ||ele.price.toString().includes(search) )
        }


    return(
        <>
        <div className="container d-flex flex-row justify-content-center gap-3 pt-4 flex-wrap mt-5 p-3">
             <Stack direction={'row'} spacing={2} sx={{ width: '80%' }} justifyContent={'center'}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" >search by category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="search by category"
                        onChange={handleChange}
                    >
                        <MenuItem value={"All Products"}>All Products</MenuItem>
                        {
                            categories.map((cate,index)=> <MenuItem key={index} value={cate}>{cate}</MenuItem>)
                        }
                    </Select>
                    </FormControl>
                    <TextField fullWidth id="outlined-basic" label="search" variant="outlined" value={search} onChange={(e)=>setSearch(e.target.value)} />
            </Stack>
                {
                    displayedProducts.map((product,index)=>(
                        <div key={index} style={{cursor:'pointer'}} className="product-card  d-flex flex-column justify-content-center gap-2 rounded bg-light  col-xs-12 col-md-5 col-lg-3 " >
                            <Link to={`/product/${product.id}`} className='text-decoration-none text-dark'>
                            <div style={{height:"175px"}} >
                            <img src={product.thumbnail} className='w-100 h-100 rounded' alt='product img' />
                            </div>
                            <p className='ps-3 pt-3'> {product.title}</p>
                            <p className='ps-3 fw-bold'>{product.price} $</p>
                            <p className='ps-3'><Rating name="read-only" value={product.rating} readOnly /></p>
                            </Link>
                            {/* <button className='btn btn-outline-primary' onClick={()=>dispatch(addToCart(product))}> add to card</button> */}
                        </div>
                        )
                    )
                }
            
        </div>
        <Footer/>
        </>
       )
}
export default Products;