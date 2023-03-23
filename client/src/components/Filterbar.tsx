import { ChangeEvent } from "react";
import { Input } from "./Input";

function Filterbar() {
	return (
		<div className="filterContainer">
			<select className="movie-filter">
				<option value="title">Find films based on title:</option>
				<option value="year">Find films based on year:</option>
				<option value="rating">Find films with a rating greater than:</option>
				<option value="genre">Find films with the genre:</option>
				<option value="duration">
					Find films with a duration shorter than:
				</option>
			</select>
			<Input
				className={"filter-input"}
				type={""}
				onChange={function (event: ChangeEvent<HTMLInputElement>): void {
					throw new Error("Function not implemented.");
				}}
				placeholder={"enter your value here"}
			></Input>
		</div>
	);
}

export { Filterbar };
