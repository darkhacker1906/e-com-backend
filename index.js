const express = require('express')
const app = express()
const port = 8000
const connectDB=("./db.js")
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})