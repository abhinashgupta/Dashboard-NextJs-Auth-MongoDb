import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    },
    isVerified: {
        type: Boolean,
      default: false,  
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

export const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User