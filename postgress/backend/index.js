const pool = require("./db");
const express = require("express");
const cors  = require("cors");
const app = express()


app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
    const { description } = req.body;
    console.log(description);

    try {
        // Use parameterized query to avoid SQL injection
        const newData = await pool.query(
            `INSERT INTO users (name) VALUES ($1) RETURNING *`, [description]
        );
        console.log("Connected");
        
        res.json(newData.rows[0]); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message});
    }
});

app.get("/", async (req, res) => {
    
    try {
        // Use parameterized query to avoid SQL injection
        const newData = await pool.query(
            "select * from users"
        );
        console.log("Connected");
        
        res.json(newData.rows); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message});
    }
});







app.listen(4000,()=>{
    console.log("this server is running")
})