async function fetchComments( movieId: string) {
    let url = "";
    url = `http://localhost:3000/api/comments?movieId=${movieId}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
  
  export { fetchComments };
  