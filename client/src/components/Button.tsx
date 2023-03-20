import { MouseEventHandler } from "react";

function Button(props: {
  text: string;
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return <button className={props.className} onClick={props.onClick}>{props.text}</button>;
}

export { Button };
