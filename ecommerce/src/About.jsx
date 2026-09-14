import aboutusimage from './assets/aboutusimage.png'

function About(){
    return(
        <>
        {/* title         */}
        <div className="ml-7 mt-6 mb-4"> 
            <p className="text-white font-bold text-xl md:text-2xl">About</p>
            <p className="text-white/80 mt-2 text-sm md:text-lg">Home / About </p>
        </div>

        {/* About Us */}
        <div className="flex flex-col md:flex-row flex-between gap-6 md:gap-30">
        <div>
        <div>
        <div className="flex flex-row gap-2 ml-7 mt-6 mb-4">
            <h1 className="text-white font-bold text-xl md:text-5xl">About</h1>
            <h1 className=" text-[#55C84A] font-bold text-xl md:text-5xl">Us</h1>
        </div>
        <p className="ml-7 md:w-[600px] mx-2  text-white/80 mt-2 text-sm md:text-lg">ShopHub was founded with a simple idea — to make online shopping easy, reliable, and enjoyable for everyone. We bring together a wide range of high-quality products across categories, from everyday essentials to the latest must-haves, all in one convenient place.
        <br/><br/>With competitive prices, secure payments, fast delivery, and dedicated customer support, we are committed to providing a seamless shopping experience you can trust.</p>
        </div>
       
       <button className="ml-7 mt-6 bg-[#50EBA7] font-semibold px-2 md:px-4  md:py-2 rounded md:rounded-xl ">Shop Now</button>
       </div>
       <div>
        <img src={aboutusimage} alt="aboutus image" className="w-[340px] md:w-[600px] md:h-[400px] mx-4 my-4 object-cover rounded-2xl border border-[#26352D]/40"/>
       </div>
       </div>
        </>
    )
}
export default About