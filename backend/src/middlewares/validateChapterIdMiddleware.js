import BibleService from '../services/bibleService.js';

export const validateChapterId = (paramBook, paramChapter) => {
  return async (req, res, next) => {
    const bookId = req.params[paramBook];
    const chapterId = Number(req.params[paramChapter]);

    const errorChapterId = await validatechapterId(chapterId);

    if(errorChapterId) {
        const error = new Error(errorChapterId);
        error.status = 400;
        return next(error);
    }

    const bookChapterLength = await getChapterLength(bookId);
    const errorChapterLength = checkChapterLength(chapterId, bookChapterLength);



    if (errorChapterLength) {
      const error = new Error(errorChapterLength);
      error.status = 400;
      return next(error);
    }
    req.params[paramChapter] = chapterId;
    next();
  };
};

async function getChapterLength(bookId) {
  const book = await BibleService.getBooksWithChapters(bookId);
  const chapterLength = Number(book.capitulos);
  return chapterLength;
}

function checkChapterLength(chapterId, bookChapterLength) {
  if (chapterId > bookChapterLength) return `Número não pode ser maior que ${bookChapterLength}`;
  return null;
}

async function validatechapterId(chapterId) {
    if(isNaN(chapterId)) return 'Dados inválidos, insira apenas números para a consulta';
    return null;
}
