const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res)=>{
    res.status(200).json({Message:"This is The Umuhire Valante"})

});
app.post('/', (req,res)=>{
    res.status(200).json({Message:"This is the Ingabire Nadia"})

});
app.listen(port,()=>{
    console.log(`This is server is running on port localhost:${port}`);
})