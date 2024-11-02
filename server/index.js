const express = require('express');
const app = express();
app.use(express.json());

const db = require('./models');

const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

// creating table in database
db.sequelize.sync().then(()=> {
    // check if database is connected inside workbench
    console.log("Database is connected");
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
})



