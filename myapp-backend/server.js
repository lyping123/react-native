const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT=3000

const JWT_SECRET = 'your_jwt_secret';

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'server621.iseencloud.com',
    user: 'jomjomco',
    password: 'W7#02YJpcAz1#v',
    database: 'jomjomco_attendance',
});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.post('/register',(req,res)=>{
    const {email,password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    console.log(email);
    const query="INSERT INTO  users(`email`,password) VALUES (?,?)";
    db.query(query,[email,hashedPassword],(err)=>{
        if(err) return res.status(500).json({message:err});
        res.json({message:'user created successfully'})
    });
});

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query,[email],(err,results)=>{
        if (err || results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    }); 
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

