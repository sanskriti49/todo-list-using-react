// import { useState } from "react";
import plusIcon from "src/plus.png";

export default function InputBox({
	inputTask,
	setInputTask,
	taskDate,
	setTaskDate,
	handleSubmit,
}) {
	function getInput(e) {
		setInputTask(e.target.value);
	}

	return (
		<>
			<div className="input-box">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="task-input"
						name="title"
						value={inputTask}
						onChange={getInput}
						placeholder="Add your task"
					></input>
					<input
						type="date"
						name="date"
						value={taskDate}
						onChange={(e) => setTaskDate(e.target.value)}
					></input>
				</form>

				<img
					className="plus"
					// src="src/plus.png"
					src={plusIcon}
					alt="Add task"
					onClick={handleSubmit}
				/>
			</div>
		</>
	);
}
