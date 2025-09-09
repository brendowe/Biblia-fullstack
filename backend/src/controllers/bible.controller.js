import BibleService from '../services/bibleService.js';


class BibleController {
  async getBooks(req, res, next) {
    try {
      res.json(await BibleService.getBooks());
    } catch (error) {
      next(error);
    }
  }

  async getChapters(req, res, next) {
    try {
      const { bookId } = req.params;
      res.json(await BibleService.getChapters(bookId));
    } catch (error) {
      next(error);
    }
  }

  async getBooksWithChapters(req, res, next) {
    try {
      const { bookId } = req.params;
      res.json(await BibleService.getBooksWithChapters(bookId));
    } catch (error) {
        next(error);
    }
  }

  async getVerses(req, res, next) {
    try {
      const { bookId, chapterId } = req.params;
      res.json(await BibleService.getVerses(bookId, chapterId));
    } catch (error) {
        next(error);
    }
  }

  async getOldBooks(req, res, next) {
    try {
      res.json(await BibleService.getOldBooks());
    } catch (error) {
    next(error);}
  }

  async getNewBooks(req, res, next) {
    try {
      res.json(await BibleService.getNewBooks());
    } catch (error) {
    next(error);}
  }
}
export default new BibleController();
