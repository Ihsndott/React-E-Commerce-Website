import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faListUl, faSearch, faStar, faTableCells} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import Productcard from "./Productcard"
import useSearch from "./useSearch";
import { useContext } from "react"
import { searchContext } from "./Layout"


function Products(){



const [visibleproducts, setVisibleproducts] = useState(3);
 const [open, setOpen] = useState(false)




const {search,setSearch,product} = useContext(searchContext)
const{filteredItems} = useSearch(product,search);

const productList = filteredItems.slice(0,visibleproducts).map((item) =>
        <Productcard key={item.id} id={item.id} images={item.images} brand = {item.brand} 
         rating={item.rating} title={item.title} description={item.description} 
         stock={item.stock} price={item.price} availabilityStatus={item.availabilityStatus}
         category = {item.category}  />
     )

   
    return(
        <>
{/* title         */}
        <div className="ml-7 mt-6 mb-4"> 
            <p className="text-white font-bold text-xl md:text-3xl">Products</p>
            <p className="text-white/80 mt-2 text-sm md:text-lg">Home / Products </p>
        </div>

{/* products container         */}
        
<div className="bg-transparent min-h-screen  pb-6  border border-[#26352D]/40 mx-2 md:mx-7 rounded-xl ">
        
    <div className="flex flex-row gap-2 md:gap-4  items-center">
{/* Search bar */}
            <div className="hidden md:block" >
            <input name="search" id="searchbar" type="text" placeholder="Search by product category..." value={search} onChange={(event)=>setSearch(event.target.value)}className="relative w-[400px] h-[30px] text-white/80 text-center bg-[#8C9693]/40 border pl-2 ml-4 mt-4 rounded"/>
            <FontAwesomeIcon icon={faSearch} className="absolute  top-51 left-13 z-50 text-white/80  "/>
            </div>

{/* category options */}

            <select className="w-[100px] md:w-[350px] h-[30px] text-sm md:text-lg text-white/80 text-center bg-[#8C9693]/40 border pl-2 ml-4 mt-4 rounded">
                <option value="" >All Categories</option>
                <option value="beauty" className="text-black">Beauty</option>
                <option value="groceries" className="text-black">Groceries</option>
                <option value="furniture" className="text-black">Furniture</option>
                <option value="fragrances" className="text-black">Fragrances</option>
            </select>

{/* sorting  */}

            <select className="w-[100px] md:w-[350px] h-[30px] text-white/80 text-center bg-[#8C9693]/40 border pl-2 ml-4 mt-4 rounded">
                <option value="" > Sort by : Price</option>
                <option value="lowtohigh" className="text-black">Price - Low to High</option>
                <option value="hightolow" className="text-black">Price - High to Low</option>
            </select>

{/* Explore more button to view all the product cards */}
       <div>
        <button onClick={() =>{setOpen(!open)
             {open ? setVisibleproducts(3) :setVisibleproducts(product.length) }
             }} className="bg-[#55C84A] mt-4 text-center px-1 md:px-4 py-1 text-black rounded-xl font-bold active:scale-95">{open ? "Show Less" : "Show More"}</button>
       </div>

{/* icons */}
            <div className="flex flex-row ">
                  <FontAwesomeIcon icon={faTableCells} className="text-xl md:text-3xl text-[#55C84A]  mt-4  "/> 
                 <FontAwesomeIcon icon={faListUl} className="text-xl md:text-3xl text-[#55C84A] mr-1 md:mr-2 md:ml-4 mt-4  "/> 
            </div>
            
    </div>
<div className="flex flex-row gap-4">
{/* filter by */}
    <div className="hidden md:block bg-transparent border border-[#26352D]/40 w-[250px]   mt-6 rounded-xl ">
        <h1 className="text-xl font-bold text-[#55C84A] ml-4 mt-4">Filter By</h1>

        <div>
            <p className="text-xl font-semibold text-white ml-4 mt-2">Categories</p>

            <div className="ml-4 mt-2">
                <label className="text-white flex items-center gap-2 ">
                    <input type="radio" name="category" value="All Categories" className="accent-[#55C84A] " /> All Categories
                </label>
            </div>

            <div className="ml-4 mt-2">
                <label className="text-white flex items-center gap-2">
                    <input type="radio" name="category" value="beauty" className="accent-[#55C84A] " /> Beauty
                </label>
            </div>

            <div className="ml-4 mt-2">
                <label className="text-white flex items-center gap-2">
                    <input type="radio" name="category" value="groceries" className="accent-[#55C84A] " /> Groceries
                </label>
            </div>

            <div className="ml-4 mt-2">
                <label className="text-white flex items-center gap-2">
                    <input type="radio" name="category" value="furniture" className="accent-[#55C84A] " /> Furniture
                </label>
            </div>

            <div className="ml-4 mt-2">
                <label className="text-white flex items-center gap-2">
                    <input type="radio" name="category" value="fragrances" className="accent-[#55C84A] " /> Fragrances
                </label>
            </div>
        </div>

        <hr className="border-[#26352D]/20 border-1 mx-4 my-4 w-[210px]"/>

{/* Price Range */}
                
        <div>
             <h1 className="text-xl font-semibold text-white ml-4 mt-2">Price Range</h1>
             <input type="range" min="0" max="200" defaultValue="200" className="w-[200px] accent-[#55C84A] ml-4 mt-2" />
             <div className="flex flex-row justify-between text-white/80 ml-4 mr-8">
                <span>$0</span>
                <span>$200</span>
             </div>
        </div>

        <hr className="border-[#26352D]/20 border-1 mx-4 my-4 w-[210px]"/>           

{/* Rating */}

        <div>
           <p className="text-xl font-semibold text-white ml-4 mt-2">Rating</p>
           <div className="flex flex-col gap-2">
           <label className="ml-4 text-white ">
           <input type="checkbox" name="rating" value="4" className="accent-[#55C84A] w-4 h-4 " /> 
           <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-yellow-500  mt-3 mr-2"/> 
           & UP
           </label>

           <label className="ml-4 text-white ">
           <input type="checkbox" name="rating" value="4" className="accent-[#55C84A] w-4 h-4 " /> 
           <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-white  mt-3 mr-2"/> 
           & UP
           </label>

           <label className="ml-4 text-white ">
           <input type="checkbox" name="rating" value="4" className="accent-[#55C84A] w-4 h-4 " /> 
           <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-white  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-white  mt-3 mr-2"/> 
           & UP
           </label>

           <label className="ml-4 text-white ">
           <input type="checkbox" name="rating" value="4" className="accent-[#55C84A] w-4 h-4 " /> 
           <FontAwesomeIcon icon={faStar} className="ml-2 text-lg text-yellow-500  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-white  mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-white mt-3 "/> <FontAwesomeIcon icon={faStar} className=" text-lg text-white  mt-3 mr-2"/> 
           & UP
           </label>
           </div>
        </div> 
         <hr className="border-[#26352D]/20 border-1 mx-4 my-4 w-[210px]"/>  

{/* Stock Status          */}

         <div>
           <p className="text-xl font-semibold text-white ml-4 mt-2">Stock Status</p>
              <div className="ml-4 mt-2">
                <label className="text-white flex items-center gap-2">
                    <input type="radio" name="category" value="instock" className="accent-[#55C84A] " /> In Stock
                </label>
            </div>

            <div className="ml-4 mt-2 mb-4">
                <label className="text-white flex items-center gap-2">
                    <input type="radio" name="category" value="outofstock" className="accent-[#55C84A] " />Out of Stock
                </label>
            </div>
        </div>
    </div>


{/* Display the product cards UI from API */}
        
        <div className="bg-transparent  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-6 ml-4 md:ml-0 ">
                {productList}
        </div>
            
</div>
</div>
        </>
    )
}
export default Products