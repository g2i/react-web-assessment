const express = require('express')
const app = express()
const port = 9000
const mockData = require("./MOCK_DATA.json");

const auth = (req, res, next) => {
  if (req.headers.authorization !== 'i_am_a_secret')  {
    return res.status(401).send({ message: "Unauthorized" })
  }

  next();
}

app.get('/cities', auth, (req, res) => {
  res.send(mockData);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
