
const express = require('express')
const app = express()
const port = 8080


// tương tác với Front-End
// yarn add cors

const cors = require('cors')

app.use(cors())

//  Middleware chuyển đổi để đọc định dạng json:
app.use(express.json())

app.use(express.static("."))

const rootRoute = require('./routes/rootRoute')

app.use('/api', rootRoute)

app.listen(port, () => {
    console.log("App listening on port:" + port)
})