const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express()

app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('MongoDB Connected'))

const PORT = process.env.PORT || 8000

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.post('/user/register', async (req, res) => {
    console.log('I SHOULD HAVE RECIEVED THE FORM DATA...')
    const formArray = req.body
    
    const userFullNameKey = formArray[0].inputName.toString()
    const userFullName = formArray[0].data
    const usernameKey = formArray[1].inputName
    const username = formArray[1].data
    const emailKey = formArray[2].inputName
    const email = formArray[2].data
    const companyKey = formArray[3].inputName
    const company = formArray[3].data
    const password1Key = formArray[4].inputName
    const password1 = formArray[4].data
    const password2Key = formArray[5].inputName
    const password2 = formArray[5].data
    

    const newUser = {
        [userFullNameKey]: userFullName,
        [usernameKey]: username,
        [emailKey]: email,
        [companyKey]: company,
        [password1Key]: password1,
        [password2Key]: password2,
    };


    const saveUser = new User(newUser)
    saveUser.save()
    res.redirect('/user/register')
})

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))