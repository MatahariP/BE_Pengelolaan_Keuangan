const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return res.status(400).send("Invalid or Expired Token");
    }

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        return res.status(400).send(error.details[0]);
      }
      req.user = decode;
      console.log(req.user);
      // console.log(req.body);
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = authorization;
