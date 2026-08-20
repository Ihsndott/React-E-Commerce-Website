import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import { useState, createContext,useEffect } from "react";

export const searchContext = createContext();


function Layout(){

  const [search,setSearch] = useState("")
 const [cartcount,setCartcount] = useState([]);
 const [product,setProduct] = useState([]);
 const [error,setError] = useState(null);

 useEffect(()=>{
   
    fetch('https://dummyjson.com/products')
    .then((response)=> {
        if(!response.ok){
            throw new Error("Failed to load products.")
        }
        return response.json();
    })
    .then((data)=>{setProduct(data.products)})
    .catch(() =>{setError("Failed to load products.Please try again.")});

}, []);

     return(
     <>
      <searchContext.Provider value={{search,setSearch,cartcount,setCartcount,product}}> 
       <Navbar/>
       <Outlet/>
       <Footer/>
          </searchContext.Provider> 
     </>
     )
}
export default Layout