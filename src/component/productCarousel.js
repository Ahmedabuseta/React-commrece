function Carousel ({imgs}){
    console.log(imgs)
     return(
<div id="carouselExampleAutoplaying" className="carousel  slide" data-bs-ride="carousel">
    
  <div className="carousel-inner">
{
        imgs?.map((img,index)=>(
            <div className={index==0?"carousel-item active":"carousel-item"} style={{height:'350px'}} key={index}>
                <img src={img} className="d-block w-100 h-100" alt="..."/>
            </div>
        ))
    }

  </div>
  <button style={{transform:'translateX(-60%)' }} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon  bg-dark rounded p-3"  aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button style={{transform:'translateX(60%)'}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark rounded p-3" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>

     )
}
export default Carousel