async function fetchComments( movieId?: string, page?: number) {
    let url = "";
    url = `http://localhost:3000/api/comments?movieId=${movieId}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return data;
  }
  
  export { fetchComments };
  