async function fetchFilms(page: number) {
  let url = "";
  url = `http://localhost:3000/api/films?page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export { fetchFilms };
