const express = require('express')
const path = require('path')
// const mongoose = require('mongoose');

const app = express()


// mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(console.log('MongoDB Connected'))

const PORT = process.env.PORT || 8000

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));



app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))