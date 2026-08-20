import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars,faShoppingCart, faSearch, faXmark,faShoppingBag,  } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom"
import { useState ,useContext} from "react"
import { searchContext } from "./Layout"

const NavlinkStyle = ({isActive}) => `text-2xl  font-semibold transition active:scale-95 ${ isActive? "text-[#55C84A] " : "text-white" }`

function Navbar(){

    const [open, setOpen] = useState(false)
    const {search,setSearch} = useContext(searchContext)
    const{cartcount , setCartcount} = useContext(searchContext)  
        

    return(
        <>
<div className="flex items-center justify-between">
                {/* logo */}
                <div className=" flex flex-row items-center">
                <FontAwesomeIcon icon={faShoppingBag} className="text-xl md:text-3xl text-[#55C84A]  md:mt-6 ml-2 md:ml-6"/>
                <p className="text-xl md:text-3xl text-white md:mt-6 font-bold " >Shop</p>
                <p className="text-xl md:text-3xl text-[#55C84A] md:mt-6 font-bold " >Hub</p>
                </div>
               

                {/* menu */}
                <div className="hidden md:block md:flex flex-row gap-8 mt-6 cursor-pointer ">
                    <NavLink to="/" className={NavlinkStyle} >Home</NavLink>
                    <NavLink to="/Products" className={NavlinkStyle} >Products</NavLink>
                    <NavLink to="/About" className={NavlinkStyle} >About</NavLink>
                    <NavLink to="/Services" className={NavlinkStyle} >Services</NavLink>
                </div>

                {/*icon*/}
                <div className=" cursor-pointer flex">

                    {/* Search bar */}
                    <div className="hidden md:block" >
                    <input name="search" id="search" type="text" placeholder="Search here..."value={search} onChange={(event)=>setSearch(event.target.value)} className="relative w-[200px] h-[30px] text-[#26352D] bg-[#8C9693] border pl-2 mr-2 mt-6 rounded"/>
                    <FontAwesomeIcon icon={faSearch} className="absolute text-xl right-29 top-8 z-50 text-[#26352D] "/>
                    </div>
                    {/* heart icon */}
                    <div>
                       <FontAwesomeIcon icon={faHeart} className="text-xl md:text-3xl text-[#55C84A] mr-2 mt-4 md:mt-6 "/> 
                    </div>

                    {/* Add to cart icon */}
                    <NavLink to="/Addtocart" >
                    <div className="flex flex-row relative" >
                        <FontAwesomeIcon icon={faShoppingCart} className="transition active:scale-95 text-xl md:text-3xl text-[#55C84A] mt-4 md:mt-6 md:mr-6"/>
                        <p className="text-sm md:text-md font-bold absolute ml-13 md:ml-8  md:mt-0 text-white ">{cartcount.length}</p>
                    </div>
                    </NavLink>

                   {/* <!--Hamburger Button--> */}
                    <div className="md:hidden">
                    <button id="ham-button" onClick={()=>{setOpen(!open)}} className="text-xl md:text-3xl font-bold m-2">
                    <FontAwesomeIcon icon={open?faXmark:faBars} className=" text-[#55C84A] mt-2 md:mr-6"/>
                    </button>
                    </div>
            </div>
</div> 

<hr className="md:mt-2 text-[#26352D]/40"/>
                {/* <!--Mobile-menu--> */}
                <div  className={`${open ? "block" : "hidden"} md:hidden`} >
                        <div className="flex flex-col gap-4 justify-center items-center mt-10  bg-transparent">
                            <div className="flex flex-col gap-4">
                                <NavLink to="/" className={NavlinkStyle} >Home</NavLink>
                                <NavLink to="/Products" className={NavlinkStyle} >Products</NavLink>
                                <NavLink to="/About" className={NavlinkStyle} >About</NavLink>
                                <NavLink to="/Services" className={NavlinkStyle} >Services</NavLink>
                            </div>
                                {/* Search bar */}
                                <div >
                                <input name="search" id="search" type="text" placeholder="Search here..." className="relative w-[200px] h-[30px] text-[#26352D] bg-[#8C9693] border pl-2 mr-2  rounded"/>
                                <FontAwesomeIcon icon={faSearch} className="absolute text-2xl right-29 top-71 z-50 text-[#26352D] "/>
                                </div>

                         
                               

                        </div>
                </div>  

              
        
 
        </>
    )
}
export default Navbar