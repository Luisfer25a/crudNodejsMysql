
const controller = {};

controller.list = (req, res) => {
req.getConnection((err, conn) => {
conn.query('SELECT * FROM pelicula', (err, peliculas) => {
 if (err) {
  res.json(err);
 }
 res.render('peliculas', {
    data: peliculas
 });
});
});
};

controller.save = (req, res) => {
const data = req.body;
console.log(req.body)
req.getConnection((err, connection) => {
const query = connection.query('INSERT INTO pelicula set ?', data, (err, peliculas) => {
  res.redirect('/');
})
})
};

controller.edit = (req, res) => {
const { id } = req.params;
req.getConnection((err, conn) => {
conn.query("SELECT * FROM pelicula WHERE id = ?", [id], (err, rows) => {
  res.render('peliculas_edit', {
    data: rows[0]
  })
});
});
};

controller.update = (req, res) => {
const { id } = req.params;
const newPelicula = req.body;
req.getConnection((err, conn) => {

conn.query('UPDATE pelicula set ? where id = ?', [newPelicula, id], (err, rows) => {
res.redirect('/');
});
});
};

controller.delete = (req, res) => {
const { id } = req.params;
req.getConnection((err, connection) => {
connection.query('DELETE FROM pelicula WHERE id = ?', [id], (err, rows) => {
  res.redirect('/');
});
});
}

module.exports = controller;
