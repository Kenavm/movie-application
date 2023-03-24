function isImage(src:string) {
    const image = new Image();
    image.src = src;

    const isValidImage =
      image.complete && image.naturalHeight !== 0 ? true : false;


    return isValidImage;
  }

  function generatePages(totalPages: number) {
		const pagesLength = [];
		for (let i = 0; i < totalPages; i++) {
			pagesLength.push(i);
		}
		return pagesLength;
	}

  export {isImage, generatePages}