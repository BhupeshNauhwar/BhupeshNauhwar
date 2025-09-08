const express=require("express")
const app=express();
const path=require("path")
const { MongoClient } = require("mongodb");

const port =5050

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))


app.get("/addUser", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const URL = "mongodb://root:example@localhost:27017";
const client = new MongoClient(URL);



app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();
        console.log("DB Connected");
        const db = client.db("Users");
        const data = await db.collection('users').find({}).toArray();
        res.send(data);
    } catch (err) {
        res.status(500).send("Error fetching users");
    } finally {
        await client.close();
    }
});


app.post("/addUser", async (req, res) => {
    const data = req.body;
    console.log(req.body);
    try {
        await client.connect();
        console.log("DB Connected");
        const db = client.db("Users");
        const savedData = await db.collection('users').insertOne(data);
        console.log(savedData);
        console.log("data saved in db");
        res.status(201).send(savedData);
    } catch (err) {
        res.status(500).send("Error saving user");
    } finally {
        await client.close();
    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})