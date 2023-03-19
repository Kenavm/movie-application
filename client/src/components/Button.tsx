import { MouseEventHandler } from "react";

function Button(props: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export { Button };
