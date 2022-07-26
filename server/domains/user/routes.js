const express = require('express');
const {
  authenticateJWT,
} = require('../../middleware/authenticationMiddleware');
const {
  setCalorieLimit,
  getCalorieLimit,
} = require('./controllers/calorieLimit');
const { login } = require('./controllers/login');
const { signup } = require('./controllers/signup');
const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.post('/calorie-limit', authenticateJWT, setCalorieLimit);
userRouter.get('/calorie-limit', authenticateJWT, getCalorieLimit);
module.exports = { userRouter };
