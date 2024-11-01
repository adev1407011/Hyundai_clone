var exp=require('express')
var cors=require('cors')
var bp=require('body-parser')
var { MongoClient } = require('mongodb')
app=exp()
app.use(cors())
app.use(bp.urlencoded({extended:false}))
var mongourl="mongodb://localhost:27017/";
var mdb="Car";
var db;
MongoClient.connect(mongourl).then(client=>{ 
    db=client.db(mdb);
    console.log(`successfull connected db - ${mdb}`)
}).catch(err=>{
    console.log(`error occured - ${err}`);
    process.exit(1);
});
app.get('/find',async(req,res)=>{
    if(!db){ console.log(`Connection error to db : db - ${mdb}`); 
    res.status(404).send("not connected to db"); 
    return ; }
    list=await db.collection('Models').find({}).toArray();
    console.log(list)
    res.send(list)
})


app.post('/book_car',async(req,res)=>{
    let { user_name, user_mail, user_ph, model, price } = req.body;
    try{
        await db.collection('Book').insertOne({ user_name, user_mail, user_ph, model, price });
        res.send('Successfully Booked')
    }
    catch(err){
        res.status(400).send('Error in booking - '+err);
    }
} )

app.post('/book_del',async(req,res)=>{
    let { user_name, user_mail, user_ph, model, price } = req.body;
    try{
        await db.collection('Book').deleteOne({ user_name, user_mail, user_ph, model, price });
        res.send('Successfully Cancelled Booking')
    }
    catch(err){
        res.status(400).send('Error in delete booking - '+err);
    }
} )

app.post('/book_upd',async(req,res)=>{
    let { user_name, user_mail, user_ph, model, price } = req.body;
    try{
        await db.collection('Book').updateOne({ user_name, user_mail, user_ph}, {$set: { model, price }});
        res.send('Successfully Updated Booking')
    }
    catch(err){
        res.status(400).send('Error in updated booking - '+err);
    }
} )

app.listen(5500);