require('dotenv').config()

const app = require('./server')
require('./database')

//Server is Listenning
app.listen(app.get("port"),()=>{
    console.log("server on port", app.get("port"))
})