const express = require('express');
const app = express();

const PORT = 4000;


app.get('/api', (req, res) => {
    try{        
        return res.status(200).json({
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
