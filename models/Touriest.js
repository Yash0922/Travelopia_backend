const mongoose = require('mongoose')

const touristSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true,
    },
    Number_of_touriest: {
        type: Number,
        required: true,
    },
    Budget_per_person: {
        type: Number,
        required: true,
    },
    
    
    
})
const Touriest = mongoose.model('touriest', touristSchema)

module.exports= {Touriest};

// "name":"aman",
// "Email":"yahs@gmail.com",
// "Location":"India",
// "Number_of_touriest":1,
// "Budget_per_person":5000