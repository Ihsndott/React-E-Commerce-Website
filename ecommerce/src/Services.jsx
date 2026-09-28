import servicesimage from './assets/ourservicesimage.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHeadphones, faRotateLeft, faShield, faTruck} from "@fortawesome/free-solid-svg-icons"


function Services(){
    return(
        <>
        {/* title         */}
        <div className="ml-7 mt-6 mb-4"> 
            <p className="text-white font-bold text-xl md:text-2xl">Services</p>
            <p className="text-white/80 mt-2 text-sm md:text-lg">Home / Services </p>
        </div>

        {/* Services */}
        
        <div className="flex flex-col md:flex-row justify-between md:mr-20">
        <div>
        <div className="flex flex-row gap-2 ml-7 mt-6 mb-4">
            <h1 className="text-white font-bold text-xl md:text-4xl">Our</h1>
            <h1 className=" text-[#55C84A] font-bold text-xl md:text-4xl">Services</h1>
        </div>
        <p className="ml-7 md:w-[600px] mx-2  text-white/80 mt-2 text-sm md:text-lg">We are commited to providing the best shopping experience with a range of reliable services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="ml-7 mt-6 mb-4 border border-[#26352D] rounded-xl p-2 ">
                <div className=" rounded-full px-2">
                    <FontAwesomeIcon icon={faTruck} className="text-xl mt-3 text-[#55C84A]" /> 
                </div> 
                <p className="text-white font-bold text-xl">Fast & Free Shipping</p>
                <p className="text-white/80 mt-2 text-sm md:text-lg">Enjoy free shipping on orders over $50. We ensure your products are delivered quickly, safely, and right to your doorstep.</p>
            </div>

            <div className="ml-7 mt-6 mb-4 border border-[#26352D] rounded-xl p-2 ">
                <div className=" rounded-full px-2">
                    <FontAwesomeIcon icon={faShield} className="text-xl mt-3 text-[#55C84A]" /> 
                </div> 
                <p className="text-white font-bold text-xl">Secure Payments</p>
                <p className="text-white/80 mt-2 text-sm md:text-lg">Shop with confidence using our secure payment system. Your payment information is protected with industry-leading security.</p>
            </div>

            <div className="ml-7 mt-6 mb-4 border border-[#26352D] rounded-xl p-2 ">
                <div className=" rounded-full px-2">
                    <FontAwesomeIcon icon={faRotateLeft} className="text-xl mt-3 text-[#55C84A]" /> 
                </div> 
                <p className="text-white font-bold text-xl">Easy Returns</p>
                <p className="text-white/80 mt-2 text-sm md:text-lg">Not satisfied with your purchase? No worries. We offer a simple and hassle-free return process within 30 days.</p>
            </div>

            <div className="ml-7 mt-6 mb-4 border border-[#26352D] rounded-xl p-2 ">
                <div className=" rounded-full px-2">
                    <FontAwesomeIcon icon={faHeadphones} className="text-xl mt-3 text-[#55C84A]" /> 
                </div> 
                <p className="text-white font-bold text-xl">24/7 Customer Support</p>
                <p className="text-white/80 mt-2 text-sm md:text-lg">Our friendly support team is available around the clock to assist you with questions, orders, and any concerns.</p>
            </div>
        </div>
        </div>
            
        <div>
            <img src={servicesimage} alt="services image" className="w-[300px] h-[200px] mx-2 rounded-full  object-cover  border border-[#26352D]/40"/>
        </div>
        </div>
       

        </>
    )
}
export default Services