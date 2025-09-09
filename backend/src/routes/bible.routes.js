import { Router } from 'express';
import BibleController from '../controllers/bible.controller.js';
import { validateBookId } from '../middlewares/validateBookIdMiddleware.js';
import { validateChapterId } from '../middlewares/validateChapterIdMiddleware.js';

const bibleRoutes = new Router();

bibleRoutes.get('/livros', BibleController.getBooks);

bibleRoutes.get('/capitulos/:bookId', validateBookId('bookId', 66), BibleController.getChapters);

bibleRoutes.get('/versiculos/:bookId/:chapterId', validateBookId('bookId', 66), validateChapterId('bookId', 'chapterId'), BibleController.getVerses);

bibleRoutes.get(  '/livroscapitulos/:bookId', validateBookId('bookId', 66), BibleController.getBooksWithChapters);

bibleRoutes.get('/livrosVelhoTestamento', BibleController.getOldBooks);

bibleRoutes.get('/livrosNovoTestamento', BibleController.getNewBooks);

export default bibleRoutes;
