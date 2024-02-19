const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

// Inicializacion
const app = express()

// Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}))
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({extended:false}))

// Global Variables


// Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/nodes.routes'))

// Static files
app.use(express.static(path.join(__dirname,'public')))


module.exports = app