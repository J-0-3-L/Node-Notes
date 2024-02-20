const mongoose = require("mongoose")

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env
const MONGODB_URI=`mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(db=>console.log("Conexión a la base de datos establecida"))
  .catch(err=>console.log("Error al conectar a la base de datos"))
