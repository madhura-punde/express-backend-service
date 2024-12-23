import userSchema from "../Model/User.model.js";

export let addUser = async (req, res) => {
  let { userName, gender, companyName, departmentName } = req.body;

  if ((userName, gender, companyName)) {
    try {
      let user = new userSchema({
        userName,
        gender,
        companyName,
        departmentName,
      });
      let newUser = await user.save();
      console.log("User added successfully", newUser);
      return res
        .status(200)
        .json({ message: "User Added Successfully", data: newUser });
    } catch (error) {
      console.log("Error saving user", error.message);
      throw error;
    }
  }
  return res.status(404).json({ message: "insufficient information provided" });
};

export let getUsers = async (req, res) => {
  let user = await userSchema.find();
  if (user) {
    return res.status(200).json({ message: "users details", data: user });
  }
  return res.status(500).json({
    message: "Internal Server Error, please try after some time",
    error: "",
  });
};

export let getUserById = async (req, res) => {
  let id = req.params.id;

  let foundUser = await userSchema.find({ _id: id });
  if (foundUser.length > 0) {
    return res.status(200).json({ message: "users details", data: foundUser });
  } else if (foundUser.length === 0) {
    return res.status(200).json({ message: "No User found", data: [] });
  } else {
    return res
      .status(500)
      .json({ message: "Server Error, please try after some time" });
  }
};

export let updateUserById = async (req, res) => {
  let { id } = req.params;
  let { userName, companyName, departmentName } = req.body;
  console.log(id, userName, companyName, departmentName);
  let updateFields = {};
  if (userName !== undefined) updateFields.userName = userName;
  if (companyName !== undefined) updateFields.companyName = companyName;
  if (departmentName !== undefined)
    updateFields.departmentName = departmentName;

  try {
    let s = await userSchema.findByIdAndUpdate({ _id: id }, updateFields, {
      new: true,
    });
    let updatedUserList = await userSchema.find();
    console.log("User updated successfully", s);
    res.status(200).json({
      message: "User updated successfully",
      user: s,
      data: updatedUserList,
    });
  } catch (error) {
    console.log("Error updating user", error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export let deleteUserById = async (req, res) => {
  let { id } = req.params;

  if (!id) {
    res
      .status(404)
      .json({ message: "Provide user id which is to be deleted!" });
  } else {
    let obsoleteEntry = await userSchema.findOneAndDelete({ _id: id });
    console.log(obsoleteEntry);

    if (obsoleteEntry) {
    } else {
      res.status(404).json({ message: "Invalid id provided", id: id });
    }
  }
};
