const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("../utils/ApiError");

/**
 * Login with username and password
 * - Utilize userService method to fetch user object corresponding to the email provided
 * - Use the User schema's "isPasswordMatch" method to check if input password matches the one user registered with (i.e, hash stored in MongoDB)
 * - If user doesn't exist or incorrect password,
 * throw an ApiError with "401 Unauthorized" status code and message, "Incorrect email or password"
 * - Else, return the user object
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
 const loginUserWithEmailAndPassword = async (email, password) => {
  // Utilize the userService method to fetch the user object corresponding to the provided email
  const user = await userService.getUserByEmail(email);
  // console.log("user", user)
  // Check if the user exists and if the input password matches the stored hashed password
  // console.log(password);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  // Return the user object if the credentials are correct
  return user;
};

module.exports = {
  loginUserWithEmailAndPassword,
};
