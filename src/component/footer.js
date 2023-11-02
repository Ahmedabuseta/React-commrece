import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assest/img/13763771_5350890.svg'

function Footer(){

    return(
        <footer className="footer container-fliud w-100 bg-dark mt-3 ">
        <div className="container d-flex flex-row flex-wrap justify-content-between text-light p-2 g-3">
            <div className="col-xs-12 col-lg-4 col-md-6 ">
                <h2 className="border-bottom border-primary p-3">about us</h2>
                <div>
                    <a href="index.htm" className="text-decoration-none">
                        <img src={logo} width="50px"height="50px" className="rounded-circle " alt="logo" />
                        <span className="text-uppercase text-light fs-3 ms-2 p-2" ><span className="text-primary" >high</span>tech</span>
                    </a>
                </div>
                <p className="about-us p-2 pe-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque eius quisquam magni,
                    unde porro ad quod illo labore expedita itaque placeat 
                </p>
                <p className="p-2"> copyright 2023 &copy; <span className="text-primary">abuseta</span></p>
            </div>
            <div className="col-xs-12 col-lg-3 col-md-5 ">
                <h2 className="border-bottom border-primary p-3 ">useful links</h2>
                <div className="links d-flex flex-column gap-3 fw-bold">
                    <a href="profil.htm" className="text-light "> profile</a>
                    <a href="#"className="text-light ">privay policy</a>
                    <a href="#"className="text-light ">FAQs</a>
                    <a href="#"className="text-light ">servies</a>
                </div>
            </div>
            <div className="col-xs-12 col-lg-4 col-md-6">
                <h2 className="border-bottom border-primary p-3 ">Contact info</h2>
                <p className="p-1 fw-bold    " >Contact us and we'll get back to you within 24 hours.</p>
                <p>
                    <AddLocationIcon/>
                    123 Fake ST NoWhre Country</p>
                    <p>
                    <EmailIcon/>
                    info@website.com</p>
                    <div className="social d-flex flex-row gap-3 fs-3">
                        <a href="#"><FacebookIcon/> </a>
                        <a href="#"><InstagramIcon/> </a>
                    </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer