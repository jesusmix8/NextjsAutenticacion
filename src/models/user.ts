import { Schema, model, models} from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    match: [/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    select: false,
  },
  fullname: {
    type: String,
    required: [true, "Please enter a fullname"],
    minLength: [3, "Please enter a fullname with minimum 3 characters"],
    maxLength: [50, "Please enter a fullname with maximum 20 characters"],
  },
});

const User =models.User || model("User", userSchema);

export default User;
