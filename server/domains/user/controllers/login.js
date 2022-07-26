const { config } = require('../../../config');
const jwt = require('jsonwebtoken');
const { User } = require('../repositories/User');

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      config.ACCESS_TOKEN_SECRET
    );

    res.json({
      accessToken,
    });
  } else {
    res.send('Username or password incorrect');
  }
};

module.exports = { login };
