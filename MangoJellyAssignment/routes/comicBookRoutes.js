const express = require('express');
const { createComicBook, updateComicBook, deleteComicBook, getAllComicBooks, getComicBookById } = require('../controllers/comicBookController');

const router = express.Router();

router.post('/', createComicBook);
router.put('/:id', updateComicBook);
router.delete('/:id', deleteComicBook);
router.get('/', getAllComicBooks);
router.get('/:id', getComicBookById);

module.exports = router;
