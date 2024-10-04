import mongoose from "mongoose";

const adopterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    adoptionReason: {
        type: String,
        required: true,
    },
    hasPets: {
        type: Boolean,
        default: false,
    },
    petId: {
        type: mongoose.Types.ObjectId,
        ref: 'Pet',
        required: true,
    },
    AppliedforForm: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
});

const Adopter = mongoose.model('Adopter', adopterSchema);
export default Adopter;
