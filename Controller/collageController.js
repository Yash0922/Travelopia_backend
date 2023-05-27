const {Touriest} =  require("../models/Touriest");

async function  addData (data){

    let newCollage = await Touriest.create({
        name: data.name,
        Email: data.Email,
        Location: data.Location,
        Number_of_touriest: data.Number_of_touriest,
        Budget_per_person: data.Budget_per_person,
       
    })

    return newCollage;
}
async function getData(){
    let collage;

   
        collage = await Touriest.find();
    
     
    
    
    
    return collage;

}

async function deleteData(id) {

    const employee = await Touriest.findByIdAndDelete(id)

    return employee;

}
async function updateData(id, data) {

    // const { designation, date_of_joining } = data;
    // let updateFields = {}

    // if (designation) {
    //     updateFields.designation = designation
    // }

    // if (date_of_joining) {
    //     updateFields.date_of_joining = date_of_joining
    // }

    let collage = await Touriest.findByIdAndUpdate(id,
        {$set:data});

    if (collage == null) {
        return null;
    }

    collage = await Touriest.findById(id);

    return collage;
}
module.exports =  {addData,getData,deleteData,updateData}