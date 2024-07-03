const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();

const routes=require('./routes/todorouter');
const cors=require('cors')
const app=express();
app.use(express.json());
app.use(cors());
const DB = process.env.DB;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

app.use(routes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

