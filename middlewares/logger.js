const fs = require("fs");

function logger (req ,res,next) {
    let log = "";
    const id  = req.params.id;
    
    if(req.method=="PATCH"){
        log =  `The document with id:${id} has been updated.\n`
        
    }
    else if(req.method=="DELETE"){
         log = `The document with id:${id} has been deleted.\n`
    }
    console.log("Log:",log,"id:",id)
    fs.appendFile('./records.txt', log, err => {
        if (err) {
          console.error("Logger Fail: ",err);
        }

        console.log("Logger Success");

      })
    next();
}

module.exports = {logger}