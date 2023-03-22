import { ReactEventHandler } from "react";

function ImageComponent(props: {
  src: string;
  className?: string;
  onError: ReactEventHandler<HTMLImageElement> | undefined;
}) {
  return (
    <img src={props.src} className={props.className} onError={props.onError} />
  );
}

export default ImageComponent;
