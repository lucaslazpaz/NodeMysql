const express = require('express')
const developerRouter = require('./src/routes/developer.routes')
const app = express()
const port = process.env.PORT || 5001


app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/v1/developers', developerRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})