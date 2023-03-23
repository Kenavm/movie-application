import { ChangeEventHandler } from "react";

function Select(props: {
	values: Array<string>;
	className: string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
	value: string;
}) {
	return (
		<select
			className={props.className}
			onChange={props.onChange}
			value={props.value}
		>
			{props.values.map((value) => {
				return <option value={value}>{value}</option>;
			})}
		</select>
	);
}

export default Select;
