const express = require('express');
const app = express();
import cors    from 'cors';
const PORT = 4000;

// 400 for website crash
// 401 for website and admin crash
// 402 for admin crash
// 200 for working fine
// https://servercall.vercel.app/api
app.use(
  cors({
    origin: 'https://29vnuw-w9.myshopify.com',   //  ✱  put your storefront domain here
    methods: ['GET', 'OPTIONS'],
  })
);
app.get('/api', (req, res) => {
    try{        
        return res.status(400).json({
            success:true,
            // message:'Kindly Complete the payment';
        });

    }catch(err){
        return res.status(400).json({
            success:true,
            // message:'Kindly Complete the payment';
        });
    }
})


// Stating the server
app.listen(PORT, () => {
    console.log("Server started Successfully at ", PORT);
})
