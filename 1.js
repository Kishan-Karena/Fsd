const express = require('express');
const cp = require('cookie-parser');
const bp=require('body-parser')
const app = express();
app.use(cp());
const url=bp.urlencoded({extended:true});
const staticpath=__dirname;
app.use(express.static(staticpath));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index2.html')

app.post("/index3",url,(req,res)=>
    {
        res.sendFile(__dirname + '/index3.html')
    })
    
    app.get('/submit-feedback', (req, res) => {
        const { name, email, age, room, address } = req.query;
        // Create the feedback object
        const feedback = {
            name,
            email,
            age,
            room,
            address
        };
        // Set the feedback cookie with a 10-second expiration
        res.cookie('feedback', feedback, { maxAge: 10000 });
        res.send('Your Booking Successfully <br> <a href="/feedback-details"> Show Booking Details </a> ');
        });
    app.get('/feedback-details', (req, res) => {
        const feedback = req.cookies.feedback;
        if (feedback) {
            res.send(`
        <h1>Your Booking Details</h1>
        <p><strong>Name:</strong> ${feedback.name}</p>
        <p><strong>Email:</strong> ${feedback.email}</p>
        <p><strong>Age:</strong> ${feedback.age}</p>
        <p><strong>Room:</strong> ${feedback.room}</p> 
        <p><strong>Address:</strong> ${feedback.address}</p> 
        <a href="/" > logout </a>`);
        }
        else {
            res.send('Booking Failed');
        }
    });
    app.get('/submit-order', (req, res) => {
        const { name, email, age, room,foodname, address } = req.query;
        // Create the feedback object
        const feedback = {
            name,
            email,
            age,
            room,
            foodname,
            address
        };
        // Set the feedback cookie with a 10-second expiration
        res.cookie('feedback', feedback, { maxAge: 10000 });
        res.send('Your Order Suceesfully <br> <a href="/feedback-details1"> Show Order Details </a> ');
        });
    app.get('/feedback-details1', (req, res) => {
        const feedback = req.cookies.feedback;
        if (feedback) {
            res.send(`
        <h1>Your Order Details</h1>
        <p><strong>Name:</strong> ${feedback.name}</p>
        <p><strong>Email:</strong> ${feedback.email}</p>
        <p><strong>Age:</strong> ${feedback.age}</p>
        <p><strong>Room No:</strong> ${feedback.room}</p>
        <p><strong>Food Name:</strong> ${feedback.foodname}</p> 
        <p><strong>Address:</strong> ${feedback.address}</p> 
        <a href="/" > logout </a>`);
        }
        else {
            res.send('Order Failed');
        }
    });
})
app.listen(4046, () => {
    console.log("Server running")
})