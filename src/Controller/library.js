const booksmodel = require("../Models/library");

module.exports = {
  //ambil semua data dari database
  getallBooks: (req, res) => {
    booksmodel
      .getallBooks()
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getallGenre: (req, res) => {
    booksmodel
      .getallGenre()
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  //ambil data buku dari database berdasarkan ID
  getBooksbyId: (req, res) => {
    booksmodel
      .getBooksbyId(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  //insert data ke database
  postBooks: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .postBooks(body)
      .then(response =>
        res.json({
          status: 200,
          result: body
        })
      )
      .catch(err => console.log(err));
  },
  postGenre: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .postGenre(body)
      .then(response =>
        res.json({
          status: 200,
          result: body
        })
      )
      .catch(err => console.log(err));
  },
  //ambil data genre dari database
  getBygenre: (req, res) => {
    booksmodel
      .getBygenre(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  //ambil data status dari database
  getBystatus: (req, res) => {
    booksmodel
      .getBystatus(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  //update atau edit dari database berdasarkan ID
  putBookbyId: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .putBookbyId(req)
      .then(response =>
        res.json({
          result: body
        })
      )
      .catch(err => res.json(err));
  },
  //menghapus data dari database
  deleteBooksbyID: (req, res) => {
    booksmodel
      .deleteBooksbyID(req)
      .then(response =>
        res.json({
          message: "Delete Books Success"
        })
      )
      .catch(err => res.json(err));
  }
};
