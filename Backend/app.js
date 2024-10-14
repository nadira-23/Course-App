const express=require ('express');
const cors=require('cors');

const app=new express();
app.use(cors());
const morgan=require ('morgan');
app.use(morgan('dev'));
const courseRoutes=require ('./routes/courseRoutes');
app.use('/course',courseRoutes);
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection')






app.listen(PORT,()=>{
    console.log(`Server runnning on PORT ${PORT}`)
})
