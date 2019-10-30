var express = require('express');
var router = express.Router();
const librarycontroller = require('../Controller/library')

/* GET users listing. */
router.get('/', librarycontroller.getallBooks);
router.get('/:id_books', librarycontroller.getBooksbyId);
router.post('/', librarycontroller.postBooks);
router.get('/genre/:id_genre', librarycontroller.getBygenre);
router.get('/status/:id_status', librarycontroller.getBystatus);
router.put('/edit/:id_books', librarycontroller.putBookbyId);
router.delete('/delete/:id_books', librarycontroller.deleteBooksbyID);


module.exports = router;