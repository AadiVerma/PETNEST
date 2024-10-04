import mongoose from "mongoose";
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    vaccinated: {
        type: Boolean,
        default: false,
    },
    Ownername: {
        type: String,
        required: true,
    },
    OwnerEmail: {
        type: String,
        required: true,
    },
    OwnerPhone: {
        type: String,
        required: true,
    },
    OwnerAddress: {
        type: String,
        required: true,
    }
});

const Pet = mongoose.model('Pet', petSchema);
export default Pet;
