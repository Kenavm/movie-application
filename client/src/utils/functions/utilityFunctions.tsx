function isImage(src:string) {
    const image = new Image();
    image.src = src;

    const isValidImage =
      image.complete && image.naturalHeight !== 0 ? true : false;


    return isValidImage;
  }

  export {isImage}