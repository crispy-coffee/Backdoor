const express = require('express');
const app = express();

const PORT = 4000;

// 400 for website crash
// 401 for website and admin crash
// 402 for admin crash
// 200 for working fine
// https://server-mu-beige.vercel.app/api/

app.get('/api', (req, res) => {
    try{        
        return res.status(400).json({
            success:true,
        });

    }catch(err){
        return res.status(500).json({
            success:false,
        });
    }
})


// Stating the server
app.listen(PORT, () => {
    console.log("Server started Successfully at ", PORT);
})
