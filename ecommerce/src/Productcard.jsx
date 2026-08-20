//Each card UI

import Products from "./Products";
import { searchContext } from "./Layout";
import Addcard from "./Addcard";
import { useContext } from "react";



function Productcard(props){

  
const {cartcount,setCartcount} = useContext(searchContext)

//handling insertion of selected cards
function insertAddtoCart(){

    setCartcount(cartcount+1);

    Addcard({
        id:props.id,
        title:props.title,
        price: props.price,
        images:props.images,
        category:props.category,
        quantity:1
    });
}




      return(
        <>
        <div className="bg-[#0A1011]  border border-2 border-[#26352D]/40 w-[380px] h-[680px] rounded-xl">
        <img src={props.images} alt="product image" className="w-full h-[300px] object-cover rounded-2xl" />
        <div className="flex flex-row justify-between ml-2 mr-2">
            <p className="text-lg text-[#55C84A]/80 font-semibold">{props.brand}</p>
            <div className="flex flex-row gap-1 ">
            
            <p className="font-bold text-gray-500">{props.rating}</p>
            </div>
        </div>
        <p className="text-xl text-[#50EBA7]  font-bold ml-2">{props.title}</p>
        <p className="ml-2 text-sm text-white/80">{props.description}</p>
        <p className="text-lg  text-[#55C84A]/80  font-semibold ml-2 mt-2" > Category : {props.category}</p>
         <div className="text-lg text-white font-semibold ml-2 mt-2" > Stock : {props.stock} </div>
        <p className="text-xl text-[#50EBA7] font-bold ml-2 mt-2">{props.price}</p>
        <p className={props.availabilityStatus==="In Stock"?"text-green-500 font-bold ml-2":"text-red-500 font-bold ml-2"} > {props.availabilityStatus}</p>

        <div className="flex flex-row justify-between mt-4 ml-2 mr-6">
         <button onClick={insertAddtoCart}  disabled={props.availabilityStatus !== "In Stock"} className="disabled:bg-red-400 bg-[#50EBA7] px-4 py-2 rounded-2xl font-bold active:scale-95">Add to Cart</button>
         <button  className="bg-transparent border border-[#50EBA7]  text-white px-4 py-2 rounded-2xl font-bold active:scale-95">Buy Now</button>  
            
        </div>
       </div> 



        </>
    );
}

export default Productcard