import { ChangeEvent } from "react";
import { Input } from "./Input";

function Filterbar() {
	return (
		<div className="filterContainer">
			<select className="movie-filter">
				<option value="find-title">Find films based on title:</option>
				<option value="find-year">Find films based on year:</option>
				<option value="filter-rating">
					Find films with a rating greater than:
				</option>
				<option value="genre">Find films with the genre:</option>
				<option value="filter-duration">
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
			<select className="movie-sort">
				<option value="sort-alphabetically">Sort by alphabet</option>
				<option value="sort-rating">Sort by rating</option>
				<option value="sort-year">Sort by year</option>
				<option value="sort-durating">Sort by duration</option>
			</select>
		</div>
	);
}

export { Filterbar };
