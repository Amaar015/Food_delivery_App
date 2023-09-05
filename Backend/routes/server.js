const express = require(express);
const colors = require(colors);
const dotenv = require('dotenv')

const PORT = process.evn.PORT || 4000;

const app = express();


app.get('/', (req, res) => {
    res.send('hello amaar welcome to backend server')
})

app.listen(PORT, () => {
    console.log(`Server is start at ${process.evn.DEV_MODE} at port #{PORT}`.green.inverse)
})