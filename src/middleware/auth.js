const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      res.status(400).send("Invalid or Expired Token");
    }

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        res.status(400).send(error.details[0]);
      }

      req.user = decode;
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = authorization;
