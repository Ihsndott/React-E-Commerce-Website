const stripe = require("stripe");

const stripe = stripe(process.env.STRIPE_SECRET_KEY);