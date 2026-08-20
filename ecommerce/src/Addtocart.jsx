//  This page is created for crud operations in this ecommerce page

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLock} from "@fortawesome/free-solid-svg-icons"
import {faRetweet} from "@fortawesome/free-solid-svg-icons"
import {faCreditCard} from "@fortawesome/free-solid-svg-icons"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"



//function for Save the selected product in localStorage.
function Addtocart(){

      const [cartitems,setCartitems] = useState([])

      useEffect(()=>{
        
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartitems(cart);
      
      },[]);

// Function to delete the selected card when the remove icon is clicked.
function Delete(id){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const updatedCart = cart.filter((item) => item.id !==id);

    setCartitems(updatedCart);

     localStorage.setItem("cart",JSON.stringify(updatedCart));

};

//Function to delete all the card from localstorage
function ClearAll(){
  setCartitems([]);
  localStorage.clear();
  
}

//function to increase the quantity in a shopping card
function Increaseqty(id){

     const updatedCart = cartitems.map((item)=>{

      if(item.id === id){
        return{...item,quantity:item.quantity+1}
      }
      return item;
     })
    setCartitems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
}

//function to decrease the quantity in a shopping card
function decreaseqty(id){

     const updatedCart = cartitems.map((item)=>{

      if(item.id === id && item.quantity >1){
        return{...item,quantity:item.quantity-1}
      }
      return item;
     })
    setCartitems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
}

//summary operations for calculate the subtotal , discount and total
  const subtotal = cartitems.reduce((total,item)=>{
  return total + item.price*item.quantity;
  },0);

  const discount = subtotal*0.10;

  const total = subtotal - discount;
      
  
    return (
        <>
        <div>
        <div className="flex flex-row text-center justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold mt-20  text-center  text-[#55C84A] mr-4 ">Premium </h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-20  text-center  text-white ">Shop </h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-20  text-center  text-[#55C84A] ">Hub</h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-20  text-center  text-[#55C84A] ml-4 ">Collection</h1>
        </div>
        <h4 className="md:text-xl font-semibold text-center text-white/80">Discover premium beauty products, including makeup essentials and cosmetics, carefully selected to help you look and feel your best.</h4>
       </div>

       <div className="flex flex-row justify-between items-center md:mr-4">

    <div>
    <h1 className="text-2xl md:text-4xl font-bold m-12 text-[#50EBA7]" >Shopping  Cart</h1>
    <h4 ></h4>
    </div>
    <button onClick={ClearAll} className="text-white bg-red-700 rounded-2xl px-4 py-2 font-semibold mr-2 md:mr-0" > Clear All</button>
</div>

<div className="flex flex-col md:flex md:flex-row gap-4 justify-between">
 <div className="flex flex-col gap-4 ml-4 md:ml-12">
      {cartitems.map((item)=> (
        
        <div key={item.id} className="flex flex-row items-center justify-between gap-4 border rounded-xl border-[#26352D]/40 py-2 bg-[#121918] w-[350px] md:w-[850px] h-[200px] p-4">
        <div className="flex flex-row items-center gap-4  border-gray-500 py-4">
            <img src={item.images[0]} alt="image" className="bg-white/80 rounded w-32 h-32 object-cover"/>
            <div className= "md:ml-4">
                <h3 className="text-[#55C84A] text-xl">{item.title}</h3>
                <p className="text-white">${item.price}</p>
            </div>
          <div className=" flex flex-col">   
        <div className= "flex flex-row gap-0 md:ml-[250px]" >
            <button onClick={()=>decreaseqty(item.id)}   className="decreasebtn px-4 rounded-bl rounded-tl font-semibold text-black bg-[#55C84A] cursor-pointer">−</button>
            <p className="quantitynum bg-[#55C84A] font-semibold text-black" >{item.quantity}</p>
          <button  onClick={()=>Increaseqty(item.id)} className="increasebtn px-4 bg-[#55C84A] rounded-br font-semibold text-black rounded-tr cursor-pointer">+</button>
        </div>
        <div >
             <p className="qprice text-[#50EBA7] mt-6 ml-8 md:ml-[250px] text-lg font-semibold" >${item.price}</p>
          </div>
          <div className= "mt-4"  >
          <button id="removebutton"onClick={()=> Delete(item.id)} className="flex gap-1 text-white/50 text-sm ml-6 md:ml-[250px] active:scale-95 cursor-pointer"><FontAwesomeIcon icon={faTrash} className="mt-1"/>Remove </button>
            </div>
            </div>
            </div>
            </div>
           
      ))}
       </div>



 {/* Summary of shopping */}

<div id="summary"className="w-[350px] md:w-[400px] h-fit   rounded-xl bg-[#121918] border border-[#26352D]/40 ml-4 md:ml-0  md:mr-20">
     <p className="text-[#55C84A] font-bold p-4 text-xl">Order Summary</p>
     <div className="flex flex-row justify-between mx-6 ">
     <p className="text-[#50EBA7]">Subtotal</p>
     <p id="subtotal" className="text-white">$ {subtotal.toFixed(2)}</p>
     </div>
     <div className="flex flex-row justify-between mx-6">
     <p  className="text-[#50EBA7]">Discount(10%)</p>
     <p id="discount" className="text-white ">$ {discount.toFixed(2)} </p>
     </div>
     <div className="flex flex-row justify-between mx-6 mb-4">
     <p className="text-[#50EBA7]">Shipping</p>
     <p className="text-[#55C84A]">FREE</p>
     </div>
     <hr className="border-[#26352D]/40 mx-4"/>
     <div className="flex flex-row justify-between mx-6 mb-4 mt-4 text-xl font-semibold">
      <p className="text-white ">Total</p>
      <p id="tot" className="text-white ">$ {total.toFixed(2)}</p>
     </div>
      <hr className="border-[#26352D]/40 mx-4"/>
      <div>
        <button className="bg-[#55C84A] rounded-full text-black font-semibold flex items-center px-12 py-4 mt-4 ml-20 transition duration-300 active:scale-95">Proceed to Checkout</button>
        <button className="text-[#50EBA7] flex items-center px-12 py-4 mt-2 ml-20 transition duration-300 active:scale-95"> ← Continue Shopping</button>
      </div>

       <div className="bg-transparent border border-[#26352D]/40  w-[300px] rounded-xl m-6 p-4 flex flex-col gap-2 ">
        <div >
          <p className="flex gap-3 items-center text-white/70"><FontAwesomeIcon icon={faLock} className="text-[#50EBA7] " />Secure Checkout </p> 
        </div>
        <div>
         <p className="flex gap-2 items-center text-white/70">  <FontAwesomeIcon icon={faCreditCard} className="text-[#50EBA7] "/> Multiple Payment Option </p> 
        </div>
        <div>
         <p className="flex gap-2 items-center text-white/70">  <FontAwesomeIcon icon={faRetweet} className="text-[#50EBA7] "/> Free Returns </p> 
        </div>
      </div> 
</div>

</div>
</>
    )
}

export default Addtocart