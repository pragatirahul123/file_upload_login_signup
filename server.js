const express = require('express')
const app = express()
app.use(express.json())





app.use('',require('./route/index'))
app.listen(6574,()=>{
    console.log("server is running")
})


