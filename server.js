const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const MongoClient = require("mongodb").MongoClient
const app = express()
app.use(cors())
app.use(bp.json())
const url = "mongodb://127.0.0.1:27017/"
app.post('/insert', function(req, res){
    MongoClient.connect(url, function(err, db){
        if (err) throw err
        let data = {rollno: req.body.rollno, name: req.body.name, cl:req.body.cl}
        const dbo = db.db("StudentData");
        dbo.collection("Students").insertOne(data, (err, res) =>{
            if(err) throw err
            console.log("document inserted sucessfully")
            db.close()
        })
    })
})

app.get('/display', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err
        const dbo = db.db("StudentData");
        dbo.collection("Students").find({}).toArray((err, result)=>{
            if(err) throw err
            res.send(result)
            db.close()
        })
    })
})


app.listen(5000, ()=>console.log("Listening to port 5000..."))