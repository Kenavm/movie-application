async function fetchFilms(
	page: number,
	filter: string,
	input: string | number
) {
	let url = "";
	if (filter === "filterYear" && input !== "") {
		url = `http://localhost:3000/api/films?year=${input}`;
	} else if (filter === "filterGenre" && input !== "") {
		url = `http://localhost:3000/api/films?genre=${input}`;
	} else if (filter === "filterTitle" && input !== "") {
		url = `http://localhost:3000/api/films?title=${input}`;
	} else if (filter === "filterDuration" && input !== "") {
		url = `http://localhost:3000/api/films?duration=${input}`;
	} else {
		url = `http://localhost:3000/api/films?page=${page}`;
	}
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data;
}

export { fetchFilms };
