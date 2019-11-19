const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./tags.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

//   db.serialize(() => {
    
//     db.each(`SELECT ArtistsId as id,
//     Name as name
// FROM Artists`, (err, row) => {
// if (err) {
// console.error(err.message);
// }
// console.log(row.id + "\t" + row.name);
// });
//   });

const URL_BASE: string = "/tags";

export default (app) => {
    app.get(URL_BASE, (req, res) => {
        res.send("Tags GET")
    });
    app.get(`${URL_BASE}/:id`, (req, res) => {
        res.send("Tags Some  GET")
    });
    app.put(URL_BASE, (req, res) => {
        console.log(req.body);
        res.send(req.body);
    });
    app.post(`${URL_BASE}/:id`, (req, res) => {
        res.send("Update new tag")
    });
};

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
