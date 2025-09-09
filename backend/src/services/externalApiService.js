import 'dotenv/config';
const keyapi = process.env.KEYAPI;

class ExternalApiService {
  async getBooks() {
    const url =
      'https://pesquisarnabiblia.com.br/api-projeto/api/get_books.php?version_id=1';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${keyapi}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro');
      }

      const res = await response.json();
      return res;
    } catch (error) {
      console.error('Dando erro', error.message);
      throw error;
    }
  }

  async getChapters(chapter) {
    const url = `https://pesquisarnabiblia.com.br/api-projeto/api/get_chapters.php?version_id=1&book_id=${chapter}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${keyapi}`,
        },
      });

      if (!response.ok) {
        throw new Error('erro');
      }

      const res = await response.json();
      return res;
    } catch (error) {
      console.error('Dando erro', error.message);
      throw error;
    }
  }

  async getVerses(chapter, verse) {
    const url = `https://pesquisarnabiblia.com.br/api-projeto/api/get_verses.php?version_id=1&book_id=${chapter}&chapter_id=${verse}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${keyapi}`,
        },
      });

      if (!response.ok) {
        throw new Error('erro');
      }

      const res = await response.json();
      return res;
    } catch (error) {
      console.error('dando erro', error.message);
      throw error;
    }
  }
}

export default ExternalApiService;
