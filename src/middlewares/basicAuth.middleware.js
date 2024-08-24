import userModel from "../features/users/user.model.js";

const basicAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("header value: " + authHeader);
  if (!authHeader) {
    return res.status(404).send("Login first plz!");
  }
 
  const remBasic = authHeader.replace("Basic", ""); // remove the keyword basic from the beginning
  const decodedCode = Buffer.from(remBasic, "base64").toString("utf8");
  console.log("decodedcreds: " + decodedCode); //now it is in the format username:password
  const creds = decodedCode.split(":");
  console.log(creds[0], creds[1]);
  const user = userModel
    .getAll()
    .find((u) => u.email == creds[0] && u.pass == creds[1]);

  if (user) {
    next();
  } else return res.status(401).send("user not authorised!");
};
export default basicAuth;
