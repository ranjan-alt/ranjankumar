import User from "../models/User.js";
export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) return createError(404, "user not found");
    res.status(200).json(user);
    const { password, isAdmin, ...otherDetails } = user;
    res.status(200).json(...otherDetails);
  } catch (err) {
    next(err);
  }
};
