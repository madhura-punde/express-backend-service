import mongoose from "mongoose";

let userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    companyName: {
      type: String,
      required: true,
    },
    departmentName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);
