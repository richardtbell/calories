const { User } = require('../repositories/User');
const jwt = require('jsonwebtoken');
const { config } = require('../../../config');

const signup = async (req, res) => {
  const { username, password, role } = req.body;
  const user = new User({ username, password, role, calorieLimit: 2100 });
  if (user) {
    await user.save();
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

module.exports = { signup };
