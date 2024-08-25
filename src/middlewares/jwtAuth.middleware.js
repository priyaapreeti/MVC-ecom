import jwt from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
  const getToken = req.headers["authorization"];
  console.log(getToken);
  if (!getToken) {
    res.status(404).send("not logged in!");
  }
  try {
    const payload = jwt.verify(getToken, "keyToSecure");
    console.log(payload);
    req.userId = payload.userId;
  } catch (error) {
    res.status(404).send("unauthorised user!");
  }
  next();
};
export default jwtAuth;
