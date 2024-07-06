const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./util/database');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json()); 
app.use('/uploads', express.static('uploads')); 

app.use(cors());

app.use('/admin', productRoutes);

app.use('/admin', categoryRoutes);

sequelize
.sync()
  .then(result => {
    app.listen(process.env.PORT);
  })
  .catch(err => {
    console.log(err);
  });