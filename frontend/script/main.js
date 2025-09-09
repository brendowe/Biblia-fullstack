import * as testamentos from "./modules/testamentos.js";
import * as capitulos from "./modules/capitulos.js";
import * as livros from "./modules/livros.js";




livros.nameNB();
livros.nameOB();

livros.oldT.addEventListener("change", () => capitulos.chaptersListOld());
livros.newT.addEventListener("change", () => capitulos.chaptersListNew());

testamentos.testament.addEventListener("change", testamentos.books);

capitulos.chapters.addEventListener("change", () => capitulos.changeChapters());



