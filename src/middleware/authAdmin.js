const authorizationAdmin = (req, res, next) => {
  if (req.user.type === "Admin") {
    next();
  } else {
    return res.status(403).send("Access Denied: Doesn't have permission");
  }
};

module.exports = authorizationAdmin;
