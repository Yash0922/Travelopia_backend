const express = require('express');
const collegeRouter = express.Router();
const {addData,getData,deleteData,updateData}=  require('../Controller/collageController')
const {logger} = require("../middlewares/logger");


collegeRouter.get("/info",async(req,res)=>{

try{
 

   
    let result = await  getData();

    res.send(`Data Get Sucess: ${result}`);

}
catch(e){
    console.log(e);
    res.send(`Data Get fail: ${e}`);
}
})


collegeRouter.post("/addData", async (req,res)=>{
    const data =  req.body
    console.log(data);
try{
    let result = await addData(data)

    // console.log(result);
    res.send(`Data Post Sucess: ${result}`);
}
    catch(error){
        console.log("Post Error",error)
        res.send(`Data Post fail: ${error}`);
    }

    
})
collegeRouter.delete("/delete/:id",logger, async (req,res)=>{
    
    console.log("Enter Delete Function");
    const id = req.params.id;
    console.log(id);
    try{
       let data  =  await deleteData(id);

        res.send(`data Delete Sucess: ${data}`)
    }
    catch(e){
        console.log(e);
        res.send(`data delete fail: ${e}`)
    }
    
})
collegeRouter.patch("/update/:id",logger, async (req,res)=>{
    
    const id = req.params.id;
    const data =  req.body;

    console.log("id:",id,"data",data);
    try{
        let response  =  await updateData(id,data);
        res.send(`data Update Sucess: ${response}`)
    }
    catch(e){
        console.log(e);
        res.send(`data Update fail: ${e}`)
    }
})

module.exports =  {collegeRouter}

/* 
"name": "IPEM",
"collegeId": 1454,
"Location": "India",
"Type": "technical",
"Founded":1985,
"Enrollment":"18754845",
"Website":"www.ipem.com",
"tutionFees": "$1545",

*/