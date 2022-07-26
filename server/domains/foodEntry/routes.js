const express = require('express');
const {
  authenticateJWT,
} = require('../../middleware/authenticationMiddleware');
const { deleteEntry } = require('./controllers/deleteEntry');
const { getEntries } = require('./controllers/getEntries');
const { logFood } = require('./controllers/logFood');
const { updateEntry } = require('./controllers/updateEntry');
const foodEntryRouter = express.Router();

foodEntryRouter.post('/log-food', authenticateJWT, logFood);
foodEntryRouter.get('/entries', authenticateJWT, getEntries);
foodEntryRouter.delete('/entry', authenticateJWT, deleteEntry);
foodEntryRouter.patch('/entry', authenticateJWT, updateEntry);

module.exports = { foodEntryRouter };
