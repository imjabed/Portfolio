const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(bodyParser.json())

// app.post('/send-email', async (req,res)=>{
//     const { user_email, subject, message } = req.body;
//     const transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth: {
//             user: process.env.myemail,
//             pass: process.env.apppass
//         }
//     })

//     const mailOptions = {
//         from : user_email,
//         to : process.env.myemail,
//         subject: subject,
//         text:message
//     }

//     transporter.sendMail(mailOptions, (error,info) => {
//         if(error) {   return res.status(500).send(error.toString()) } 
//         res.send('Email sent Successfully')
//     })
// })

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})