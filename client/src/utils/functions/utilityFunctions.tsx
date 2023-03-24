function isImage(src:string) {
    const image = new Image();
    image.src = src;

    const isValidImage =
      image.complete && image.naturalHeight !== 0 ? true : false;

    return isValidImage;
  }

  function generatePages(totalPages: number) {
		const pages = [];
		for (let i = 0; i < totalPages; i++) {
			pages.push(i);
		}
		return pages;
	}

  export {isImage, generatePages}