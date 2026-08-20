import heroimg from './assets/heroimg.png'
import beaimg from './assets/beauty.png'
import groimg from './assets/groceries.png'
import furimg from './assets/furniture.png'
import fraimg from './assets/fragrances.png'
import fooimg from './assets/footerimg.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHeadphones, faRotateLeft, faShield, faTruck} from "@fortawesome/free-solid-svg-icons"
import Products from "./Products";
import { useContext} from 'react';
import Productcard from './Productcard'
import { searchContext } from './Layout'



function Home(){

    const {product} = useContext(searchContext);

    const featuredproducts = product.slice(0, 4).map((item) => (
         <Productcard key={item.id} id={item.id} images={item.images} brand = {item.brand} 
         rating={item.rating} title={item.title} description={item.description} 
         stock={item.stock} price={item.price} availabilityStatus={item.availabilityStatus}
         category = {item.category}  />
    ))
    return(
        <>
{/* hero image */}
            <div className="px-2 md:px-7">
                <img src={heroimg} alt="hero image" className="relative mt-4 w-full md:h-[600px] object-cover rounded-2xl border border-[#26352D]/40"/>
           
        
{/* hero content above the image */}
            <div className="absolute z-50 top-18 md:top-50 left-4 md:left-16 ">
                        <p className="text-white md:ml-1 bg-[#2F973F] inline-block px-2 md:px-4 rounded-xl text-xs md:text-sm">BEST DEALS ONLINE</p>
                        <p className="text-white md:text-5xl font-semibold mt-2">Discover Premium</p>
                        <div className="flex flex-row gap-3 font-semibold">
                        <p className="text-[#50EBA7] md:text-5xl">Products at </p>
                        <p className="text-white md:text-5xl">Best Prices</p>
                        </div>
                        <p className="text-[#55C84A] text-xs md:text-xl mt-3">Shop smart, save big! Explore <br className="md:hidden"/> top quality products <br/> from cosmetics to groceries</p>

                        <div className="mt-4 md:mt-8 flex flex-row gap-4 ">
                            <button className="bg-[#50EBA7] font-semibold px-2 md:px-4  md:py-2 rounded md:rounded-xl ">Shop Now</button>
                            <button className="hidden md:block bg-transparent text-white border border-[#50EBA7] font-semibold px-2 md:px-4 md:py-2 rounded md:rounded-xl">Explore Deals</button>
                        </div>
            </div>
             </div>
{/* shop by category */}
            <div>
                    <div className="flex justify-between items-center">
                        <p className="text-white md:text-xl font-semibold ml-6 mt-4 ">Shop by Category</p>
                        <p className="text-[#50EBA7] md:text-xl font-semibold mt-4 mr-6 ">View All</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-8 md:mx-0  pb-4">
                        {/* category-1 */}
                        <div className="w-[320px] h-[285px] bg-[#121918] rounded-xl ml-6 text-center pt-2 border border-[#26352D]/40">
                         <img src={beaimg} alt="beauty image" className=" w-[300px]  object-cover"/>
                         <p className="text-[#50EBA7] md:text-xl font-semibold">Beauty</p>
                         <p className="text-sm text-white/80">125+ products</p>
                        </div>

                        {/* category-2 */}
                        <div className="w-[320px] h-[285px] bg-[#121918] rounded-xl ml-6 text-center pt-2 border border-[#26352D]/40">
                         <img src={groimg} alt="beauty image" className=" w-[300px]  object-cover"/>
                         <p className="text-[#50EBA7] md:text-xl font-semibold">Groceries</p>
                         <p className="text-sm text-white/80">85+ products</p>
                        </div>

                        {/* category-3 */}
                        <div className="w-[320px] h-[285px] bg-[#121918] rounded-xl ml-6 text-center pt-2 border border-[#26352D]/40">
                         <img src={furimg} alt="beauty image" className=" w-[300px]  object-cover"/>
                         <p className="text-[#50EBA7] md:text-xl font-semibold">Furniture</p>
                         <p className="text-sm text-white/80">52+ products</p>
                        </div>

                        {/* category-4 */}
                        <div className="w-[320px] h-[285px] bg-[#121918] rounded-xl ml-6 text-center pt-2 border border-[#26352D]/40">
                         <img src={fraimg} alt="beauty image" className=" w-[300px]  object-cover"/>
                         <p className="text-[#50EBA7] md:text-xl font-semibold">Fragrances</p>
                         <p className="text-sm text-white/80">25+ products</p>
                        </div>
                    </div>
            </div>
{/* Featured products */}
            <div>
                    <div className="flex justify-between items-center">
                        <p className="text-white md:text-xl font-semibold ml-6 mt-4 ">Featured Products</p>
                        <p className="text-[#50EBA7] md:text-xl font-semibold mt-4 mr-6 ">View All</p>
                    </div>

                    <div className="bg-transparent  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 gap-4 justify-items-center mt-6 ">
                        {featuredproducts}
                    </div>
            </div>   
{/* services provide by shophub */}
            <div className="bg-[#121918] px-4 py-6 flex flex-col md:flex-row gap-6 justify-between px-14 rounded-xl mt-6 ml-6 mr-6 mb-8 border border-[#26352D]/40 ">
                    <div className="flex flex-row gap-2">
                        <div className="bg-[#142419] rounded-full px-2">
                            <FontAwesomeIcon icon={faTruck} className="text-xl mt-3 text-[#55C84A]" /> 
                        </div> 
                        <div className="flex flex-col">
                            <p className="text-white">Free Shipping</p>    
                            <p className="text-white/80 text-sm">On orders above $50 </p>
                        </div>  
                    </div>  

                     <div className="flex flex-row gap-2">
                        <div className="bg-[#142419] rounded-full px-2">
                            <FontAwesomeIcon icon={faShield} className="text-xl mt-3 text-[#55C84A]" /> 
                        </div> 
                        <div className="flex flex-col">
                            <p className="text-white">Secure Payments</p>    
                            <p className="text-white/80 text-sm">100% secure checkout  </p>
                        </div>  
                    </div>  

                     <div className="flex flex-row gap-2">
                        <div className="bg-[#142419] rounded-full px-2">
                            <FontAwesomeIcon icon={faRotateLeft} className="text-xl mt-3 text-[#55C84A]" /> 
                        </div> 
                        <div className="flex flex-col">
                            <p className="text-white">Easy Returns</p>    
                            <p className="text-white/80 text-sm">30-day return policy </p>
                        </div>  
                    </div>  

                     <div className="flex flex-row gap-2">
                        <div className="bg-[#142419] rounded-full px-2">
                            <FontAwesomeIcon icon={faHeadphones} className="text-xl mt-3 text-[#55C84A]" /> 
                        </div> 
                        <div className="flex flex-col">
                            <p className="text-white">2/7 Support</p>    
                            <p className="text-white/80 text-sm">Always here to help </p>
                        </div>  
                    </div>   
            </div>   
{/* footer promotion with image  */}
            <div className=" relative px-6 pb-12">
                <img src={fooimg} alt="promotion image" className=" w-full object-cover rounded-xl border border-[#26352D]/40"/>
           

{/* offer content above the image */}
            <div className="absolute z-50 top-0 md:top-20 left-8 md:left-16 ">
                        <div className="hidden md:block">
                        <p className="text-black font-semibold md:ml-1 bg-[#2F973F] inline-block px-2 md:px-4 rounded-xl text-xs md:text-sm">LIMITED TIME OFFER</p>
                        </div>
                        <div className="flex flex-row gap-3 font-semibold mt-1 md:mt-4">
                        <p className="text-[#50EBA7] md:text-5xl">Get Up to </p>
                        <p className="text-white md:text-5xl">40% Off</p>
                        </div>
                         <p className="text-white/80 text-xs md:text-xl font-semibold mt-1 md:mt-4">On your favourite products.<br className="md:hidden"/> Don't miss out!</p>
                        
                        <div className=" mt-2 md:mt-8 ">
                            <button className="bg-[#50EBA7] font-semibold px-2 md:px-4  md:py-2 rounded md:rounded-xl text-xs md:text-lg ">Shop Deals Now  <FontAwesomeIcon icon={faArrowRight} className="text-xs md:text-xl ml-2  text-black font-semibold" /> </button>
                            
                        </div>      
            </div>
             </div>

                       
              
        </>

       
    )
}
export default Home