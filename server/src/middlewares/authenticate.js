import user from "../entities/user";

export default function (req, res, next) {
  try {
    const { authorization } = req.headers;
    const [_, hash] = authorization.split(" ");
    const data = user.verify({ token: hash });
    if (data.status === 400) throw Error();
    req.user = data.data;
    return next();
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: "not authorized" });
  }
}
