const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const users = [];

function upsert(array, item) {
  const i = array.findIndex((arrayItem) => arrayItem.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

/**
 * @param req
 * @param res
 */
exports.login = async (req, res) => {
  const { token } = req.body;
  const info = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = info.getPayload();
  upsert(users, { name, email, picture });
  let response = {
    name, email, picture
  }
  
  return res.status(200).send(response);
};
