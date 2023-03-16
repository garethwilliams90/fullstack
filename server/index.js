const express = require("express")
const app = express()
const PORT = 5001
const cors = require("cors")

// middle war
app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
