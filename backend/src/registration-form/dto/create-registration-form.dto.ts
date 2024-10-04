import mongoose from "mongoose";
export class CreateRegistrationFormDto {
    name:string;
    email: string;
    phone: string;
    address: string;
    adoptionReason:string;
    hasPets:boolean;
    petId: mongoose.Types.ObjectId;
    AppliedforForm:Date;
    status: string;
}
