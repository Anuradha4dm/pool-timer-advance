const express=require('express');

const app=express();
const PORT=3000;


app.get('/',(req,res)=>{

    res.send('Root path touched.');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} port.`)
})