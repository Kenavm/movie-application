import { ChangeEvent } from "react";
import Select from "./Select";

function Sortbar() {
	<>
		<Select
			values={[]}
			onChange={function (event: ChangeEvent<HTMLSelectElement>): void {
				throw new Error("Function not implemented.");
			}}
			value={""}
		></Select>
	</>;
}

export { Sortbar };
