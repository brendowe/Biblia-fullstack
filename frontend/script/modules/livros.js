import * as capitulos from "./capitulos.js";

export const oldT = document.getElementById("oldT");
export const newT = document.getElementById("newT");

export const oldBooks = async () => {
  const url = "http://localhost:3000/api/livrosVelhoTestamento";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const newBooks = async () => {
  const url = "http://localhost:3000/api/livrosNovoTestamento";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const nameOB = async () => {
  const list = await oldBooks();
  const listName = list.map((item) => [item.name, item.id]);
  listName.map((item) => oldT.appendChild(create(item)));
  capitulos.chaptersListOld();
};

export const nameNB = async () => {
  const list = await newBooks();
  const listName = list.map((item) => [item.name, item.id]);
  listName.map((item) => newT.appendChild(create(item)));
};

const create = (value) => {
  const opt = document.createElement("option");
  opt.value = value[1];
  opt.textContent = value[0];
  return opt;
};

export const oldBooksT = () => {
  newT.classList.add("newT-disable");
  oldT.classList.remove("oldT-disable");
  capitulos.chaptersListOld();
};

export const newBooksT = () => {
  oldT.classList.add("oldT-disable");
  newT.classList.remove("newT-disable");
  capitulos.chaptersListNew();
};

