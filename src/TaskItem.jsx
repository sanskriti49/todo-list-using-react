import penIcon from "src/pen1.png";
import deleteIcon from "src/delete.png";

export default function TaskItem({
	task,
	isEditingTask,
	handleEdit,
	handleSave,
	editedTask,
	setEditedTask,
	editedDate,
	setEditedDate,
	setAlertType,
	markTaskCompleted,
	setEditingTaskId,
}) {
	return (
		<li key={task.id} className="item">
			{isEditingTask ? (
				<form onSubmit={(e) => handleSave(e, task.id)} className="task-info">
					<input
						type="text"
						className="edit"
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
						placeholder="Edit your task"
					/>
					<input
						className="edit"
						type="date"
						value={editedDate}
						onChange={(e) => setEditedDate(e.target.value)}
					/>
					<button
						type="button"
						style={{ fontSize: 18 }}
						onClick={(e) => handleSave(e, task.id)}
					>
						✔
					</button>
					<button
						type="button"
						onClick={() => setEditingTaskId(null)}
						style={{
							float: "right",
							fontSize: 18,
							paddingLeft: 9,
						}}
					>
						✖
					</button>
				</form>
			) : (
				// render normal task display
				<>
					<div className="task-info">
						<span
							className="task-text"
							style={{
								textDecoration: task.completed ? "line-through" : "none",
							}}
						>
							{task.title}
						</span>
					</div>
					<span className="task-date">{task.date || ""}</span>
					{task.completed ? (
						<span className="checkmark">✔</span>
					) : (
						<>
							<button onClick={() => handleEdit(task)}>
								<img
									className="edit"
									// src="src/pen1.png"
									src={penIcon}
									alt="edit"
									style={{ width: 52, height: 52, padding: 3 }}
								/>
							</button>
							<button
								onClick={() => {
									markTaskCompleted(task.id); // First function
									setAlertType("completed"); // Second function
								}}
							>
								{" "}
								<img
									className="delete"
									// src="src/delete.png"
									src={deleteIcon}
									alt="delete"
									style={{ width: 25, height: 28 }}
								/>
							</button>
						</>
					)}
				</>
			)}
		</li>
	);
}
