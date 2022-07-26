const express = require('express');
const {
  authenticateJWT,
} = require('../../middleware/authenticationMiddleware');
const { isAdmin } = require('../../middleware/isAdmin');
const { getEntries } = require('./controllers/entries');
const { logFood } = require('./controllers/logFood');
const { getReport } = require('./controllers/report');

const adminRouter = express.Router();

adminRouter.get('/admin/report', authenticateJWT, isAdmin, getReport);
adminRouter.get('/admin/entries', authenticateJWT, isAdmin, getEntries);
adminRouter.post('/admin/log-food', authenticateJWT, isAdmin, logFood);

module.exports = { adminRouter };
