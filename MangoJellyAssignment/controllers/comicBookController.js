const ComicBook = require('../models/comicBook');

// Create Comic Book
exports.createComicBook = async (req, res) => {
    try {
        const comicBook = new ComicBook(req.body);
        await comicBook.save();
        res.status(201).json(comicBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Edit Comic Book
exports.updateComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comicBook) return res.status(404).json({ msg: 'Comic book not found' });
        res.json(comicBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Comic Book
exports.deleteComicBook = async (req, res) => {
    try {
        await ComicBook.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Comic book deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Fetch all Comic Books (with pagination and filters)
exports.getAllComicBooks = async (req, res) => {
    const { author, year, price, condition, page = 1, limit = 10, sort } = req.query;
    let filter = {};
    if (author) filter.author = author;
    if (year) filter.year = year;
    if (price) filter.price = price;
    if (condition) filter.condition = condition;

    try {
        const comicBooks = await ComicBook.find(filter)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort(sort ? sort : 'createdAt');
        res.json(comicBooks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Comic Book Details by ID
exports.getComicBookById = async (req, res) => {
    try {
        const comicBook = await ComicBook.findById(req.params.id);
        if (!comicBook) return res.status(404).json({ msg: 'Comic book not found' });
        res.json(comicBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
