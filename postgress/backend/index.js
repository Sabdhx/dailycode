const pool = require("./db");
const express = require("express");
const cors  = require("cors");
const app = express()


app.use(cors());
app.use(express.json());

app.post("/create", async (req, res) => {
    const { description,email } = req.body;
    console.log(description);

    try {
        // Use parameterized query to avoid SQL injection
        const newData = await pool.query(
            `INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *`, [description,email]
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

app.delete("/delete/:id" , async(req,res)=>{
    const id = req.params.id;
    try {
        const deleteData = await pool.query(
            `delete from users where id = ${id}`
        );
        res.status(200).json({message:"delted successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
  
})

app.post("/update/:id", async(req,res)=>{
     const {description} = req.body;
     const id = req.params.id;
     console.log(description);
     console.log(id)
try {
    const updateContent  = await pool.query(`update users set name = $1 where id = $2`,[description,id]);
    res.status(200).json({updateContent})
} catch (error) {
    res.status(404).json({message:error.message});
    console.error(error)
}
    
})





app.listen(4000,()=>{
    console.log("this server is running")
})