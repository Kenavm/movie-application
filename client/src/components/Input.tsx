import { ChangeEventHandler } from "react";

function Input(props: {
	type: string;
	className: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
}) {
	return (
		<input
			className={props.className}
			type={props.type}
			onChange={props.onChange}
			placeholder={props.placeholder}
		></input>
	);
}

export { Input };
