import * as livros from './livros.js';
import { chapters } from './capitulos.js';

export const testament = document.getElementById("testament");

export const books = () => {
  if (testament.value == "Velho Testamento") {
    chapters.innerHTML = "";
    livros.oldBooksT();
  } else {
    chapters.innerHTML = "";
    livros.newBooksT();
  }
};

