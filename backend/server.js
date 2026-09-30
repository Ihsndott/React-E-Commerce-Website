require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

const paymentRoutes = require("./src/routes/payment.routes");

const PORT=5000;

app.use(cors());
app.use(express.json());

app.use("/api/payment",paymentRoutes);

app.get("/",(req,res)=>{
    res.send("Backend is running")
})

app.listen(PORT,()=>{
    console.log("server running successfully..!")
})

