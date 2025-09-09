import { resultado } from "./versiculosCompletos.js";
import { fullChapter } from "./versiculosCompletos.js";
import * as testamentos from "./testamentos.js";
import * as livros from "./livros.js";

export const chapters = document.getElementById("chapters");

export const chaptersListOld = async (selectedChapter = 1) => {
  if (oldT) {
    try {
      resultado.innerHTML = "";
      chapters.innerHTML = "";
      const url = `http://localhost:3000/api/livroscapitulos/${oldT.value}`;
      const response = await fetch(url);
      const res = await response.json();
      for (let index = 1; index <= res.capitulos; index++) {
        const opt = document.createElement("option");
        opt.textContent = index;
        opt.value = index;
        chapters.appendChild(opt);
      }

      chapters.value = selectedChapter;
      await fullChapter(oldT.value, selectedChapter);
    } catch (error) {
      console.error(error);
    }
  }
};

export const chaptersListNew = async (selectedChapter = 1) => {
  if (newT) {
    try {
      resultado.innerHTML = "";
      chapters.innerHTML = "";
      const url = `http://localhost:3000/api/livroscapitulos/${newT.value}`;
      const response = await fetch(url);
      const res = await response.json();
      for (let index = 1; index <= res.capitulos; index++) {
        const opt = document.createElement("option");
        opt.textContent = index;
        opt.value = index;
        chapters.appendChild(opt);
      }

      chapters.value = selectedChapter;
      await fullChapter(newT.value, selectedChapter);
    } catch (error) {
      console.error(error);
    }
  }
};


export const changeChapters = () => {
  const selectedBook =
      testamentos.testament.value === "Velho Testamento"
        ? livros.oldT.value
        : livros.newT.value;
    const selectedChapter = chapters.value;
    resultado.innerHTML = "";
    fullChapter(selectedBook, selectedChapter);
}
