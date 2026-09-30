const Stripe = require("stripe");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
     service:"Gmail",
     auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
     }
});

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const payment = async (req,res)=>{
    try{
     const {cart} = req.body
     const checkout = await stripe.checkout.sessions.create({
        line_items:cart.map((item) => ({
            price_data:{
                currency:"usd",
                product_data:{
                    name:item.title
                },
                unit_amount:Math.round(item.price*100)
            },
            quantity:item.quantity 
     })),
     mode:"payment",
     success_url:"http://localhost:5173/success",
     cancel_url:"http://localhost:5173/cancel"
    })
     res.json({
        success:true,
        message:"Checkout session has been created successfully",
        checkout
     }) 
     }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:error.message
        });
    }
}

const sendEmail = async (req,res)=>{
    try{
        const {email} = req.body;
        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"Payment Successful",
            text:"Thank you for your order, Your payment was successful"
            
        });
        res.json({
            success:true,
            message:"Email sent successfully...!"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
        success:false,
        message:error.message
        });
    }
} 
module.exports={payment,sendEmail};
