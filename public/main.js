function FilmesPoulares() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => RenderizarFilmes(data.results))
    .catch((err) => console.error(err));
}

function RenderizarFilmes(Filmes) {
  const FilmesContainer = document.querySelector(".filmes-container");
  FilmesContainer.innerHTML = "";

  Filmes.forEach((filme) => {
    const FilmeBannerURl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;

    const FilmesElementos = document.createElement("div");
    FilmesElementos.classList.add("filme-item");
    FilmesElementos.innerHTML = `
      <img src="${FilmeBannerURl}" alt="${filme.title}" class="filme-banner">
      <div class="-info">
        <h3>${filme.title}</h3>
        <p>Nota: ${filme.vote_average}</p>
        <p>Data de Lançamento: ${filme.release_date}</p>
      </div>
    `;
    FilmesContainer.appendChild(FilmesElementos);
  });
}

document.addEventListener("DOMContentLoaded", FilmesPoulares);
