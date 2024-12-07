const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = require('./models');

const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);
const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

// creating table in database
db.sequelize.sync().then(() => {
  // check if database is connected inside workbench
  console.log('Database is connected');
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
});
