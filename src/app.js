const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');


const app = express();
//importando rutas


const movieRoutes = require('./routes/movie');
//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'crudnodejsmysql.chzo9toejues.us-east-1.rds.amazonaws.com',
  user: 'crud',
  password: 'abcd1234',
  port: 3306,
  database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', movieRoutes);
//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//empezando el servidor
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
