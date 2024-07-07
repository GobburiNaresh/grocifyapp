const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./util/database');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.use('/admin', productRoutes);
app.use('/admin', categoryRoutes);

sequelize.sync()
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
  });
