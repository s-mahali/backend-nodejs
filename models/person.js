const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },

  work: {
    type: String,
    enum: ["chef", "manager", "waiter", "owner"],
    required: true,
  },

  mobile: {
    type: Number,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
  },

  salary: {
    type: Number,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

personSchema.pre("save", async function (next) {
  //hash the password only if it has been modified (or is new)
  const person = this;
  if (!person.isModified("password")) return next();
  try {
    //hash password generate
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(person.password, salt);
    person.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
   // use bcrypt to compare the provided password with the hashed one in the database
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// create Person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
