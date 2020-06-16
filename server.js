const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const env = require('dotenv')

const app = express();
app.use(cors());
app.use(express.json())
env.config();

const port = process.env.PORT || 4000;

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected successfully')
})

const usersRouter = require('./routes/users');
const ProductsRouter = require('./routes/products')

app.use('/users', usersRouter);
app.use('/products', ProductsRouter)



app.listen(port, () => {
    console.log(`server started on port: ${port}`);

})