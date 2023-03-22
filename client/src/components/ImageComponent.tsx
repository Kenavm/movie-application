function ImageComponent(props: { src: string; className: string }) {
  return <img src={props.src} className={props.className} />;
}

export default ImageComponent;
