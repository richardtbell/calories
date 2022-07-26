const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const { foodEntryRouter } = require('./domains/foodEntry/routes');
const { userRouter } = require('./domains/user/routes');
const { adminRouter } = require('./domains/admin/routes');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

app.use(helmet());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());
app.use(foodEntryRouter);
app.use(userRouter);
app.use(adminRouter);
app.listen(port, () => {
  console.log(`Calorie app listening on port ${port}`);
});
