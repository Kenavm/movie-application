import { ChangeEvent } from "react";
import { Input } from "./Input";

function Filterbar(props: {
	onHandleFilter: Function;
	onHandleInput: Function;
}) {
	return (
		<div className="filterContainer">
			<select
				className="movie-filter"
				value=""
				onChange={(e) => props.onHandleFilter(e.target.value)}
			>
				{" "}
				<option value=""></option>
				<option value="filterTitle">Find films based on title:</option>
				<option value="filterYear">Find films based on year:</option>
				<option value="filterRating">
					Find films with a rating greater than:
				</option>
				<option value="filterGenre">Find films with the genre:</option>
				<option value="filterDuration">
					Find films with a duration shorter than:
				</option>
			</select>
			<Input
				className={"filter-input"}
				type={""}
				value=""
				onChange={(e) => props.onHandleInput(e.target.value)}
				placeholder={"enter your value here"}
			></Input>
			<select className="movie-sort">
				<option value="sortAlphabetically">Sort by alphabet</option>
				<option value="sortRating">Sort by rating</option>
				<option value="sortYear">Sort by year</option>
				<option value="sortDurating">Sort by duration</option>
			</select>
		</div>
	);
}

export { Filterbar };
