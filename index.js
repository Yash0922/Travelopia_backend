const {connectDatabase} =require('./config/db')
const express = require('express');
const cors = require('cors');
const {collegeRouter} = require('./Routes/collegeRouter')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/",collegeRouter);




const port = 3000;
connectDatabase()
.then(() => {
    app.listen(port, (e) => {
        if(e){
            console.log("Server Error",e);
        }
        console.log(`Server listening on http://localhost:${port}`)
    })
})