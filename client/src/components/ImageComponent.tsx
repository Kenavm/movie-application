import { isImage } from "../utils/functions/utilityFunctions";

function ImageComponent(props: { src: string; className: string }) {
  return (
    <img
      src={
        isImage(props.src) ? props.src : "./src/assets/images/notAvailable.jpg"
      }
      className={props.className}
    />
  );
}

export default ImageComponent;
