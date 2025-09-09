import ExternalApiService from '../services/externalApiService.js';

class BibleService {
  constructor() {
    this.service = new ExternalApiService();
  }

  async getBooks() {
    const books = await this.service.getBooks();
    return books.sort((a, b) => a.id - b.id);
  }

  async getChapters(bookId) {
    const chapters = await this.service.getChapters(bookId);
    return chapters;
  }

  async getBooksWithChapters(bookId) {
    const books = await this.service.getBooks();
    const book = books.sort((a, b) => a.id - b.id);
    const selectedBook = book[bookId - 1];
    const chapters = await this.service.getChapters(bookId);
    const response = { id: selectedBook.id, nome: selectedBook.name, capitulos: chapters.length };
    return response;
  }

  async getVerses(bookId, chapterId) {
    const verses = await this.service.getVerses(bookId, chapterId);
    return verses;
  }

  async getOldBooks() {
    const books = await this.service.getBooks();
    const filBooks = books
      .filter((book) => book.id <= 39)
      .sort((a, b) => a.id - b.id);
    return filBooks;
  }

  async getNewBooks() {
    const books = await this.service.getBooks();
    const filBooks = books
      .filter((book) => book.id > 39)
      .sort((a, b) => a.id - b.id);
    return filBooks;
  }
}

export default new BibleService();
