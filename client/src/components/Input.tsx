import { ChangeEventHandler } from "react";

function Input(props: { type: string, onChange: ChangeEventHandler<HTMLInputElement>, placeholder: string }) {
  return <input type={props.type} onChange={props.onChange} placeholder={props.placeholder}></input>;
}

export { Input };
