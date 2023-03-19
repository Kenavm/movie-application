import { ChangeEventHandler } from "react";

function Textarea(props: {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return <textarea onChange={props.onChange}></textarea>;
}

export { Textarea };
