export const resultado = document.getElementById("resultado");

export const fullChapter = async (book, chapter) => {
  try {
    const url = `http://localhost:3000/api/versiculos/${book}/${chapter}`;
    const response = await fetch(url);
    const res = await response.json();

    for (let index = 0; index < res.verses.length; index++) {
      let texto = `<p>${index + 1} - ${res.verses[index].text}</p><br>`;
      resultado.innerHTML += texto;
    }
  } catch (error) {
    console.error(error);
  }
};
