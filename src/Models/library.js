const conn = require("../Config/db");

module.exports = {
  getallBooks: () => {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM books";
      conn.query(sql, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  },
  getBooksbyId: req => {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM books WHERE id_books=" + req.params.id_books;
      conn.query(sql, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  },
  postBooks: body => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO books SET ?", [body], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  postGenre: body => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO genre SET?", [body], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  getBygenre: req => {
    return new Promise((resolve, reject) => {
      let sql =
        "SELECT a.title,a.author,c.status,b.genre AS genre FROM books a INNER JOIN status c ON a.id_status=c.id_status INNER JOIN genre b ON a.id_genre=b.id_genre WHERE b.id_genre=" +
        req.params.id_genre;
      let query = conn.query(sql, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  },
  getBystatus: req => {
    return new Promise((resolve, reject) => {
      let sql =
        "SELECT a.title,a.author,b.genre,c.status AS status FROM books a INNER JOIN genre b ON a.id_genre=b.id_genre INNER JOIN status c ON a.id_status=c.id_status WHERE c.id_status=" +
        req.params.id_status;
      let query = conn.query(sql, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  },
  putBookbyId: req => {
    return new Promise((resolve, reject) => {
      let sql =
        "UPDATE books SET title='" +
        req.body.title +
        "', author='" +
        req.body.author +
        "',id_genre='" +
        req.body.id_genre +
        "',id_status='" +
        req.body.id_status +
        "' WHERE id_books=" +
        req.params.id_books;
      let query = conn.query(sql, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteBooksbyID: req => {
    return new Promise((resolve, reject) => {
      let sql = "DELETE FROM books WHERE id_books=" + req.params.id_books + "";
      let query = conn.query(sql, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  }
};
