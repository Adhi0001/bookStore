const express=require('express');
const {port,mongoURL} = require('./config');
const mongoose=require('mongoose');
const router = require('./routes/routes');
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(
    cors( )
   
);

app.use('/api',router);

app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`);
});
mongoose.connect(mongoURL).then(()=>{
    console.log("successfully connected to the database");
})
.catch((err)=>{
   console.log("Not connected to the databse",err);
   
})