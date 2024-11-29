import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({
	tasks,
	setTasks,
	markTaskCompleted,
	setAlertType,
}) {
	const [editingTaskId, setEditingTaskId] = useState(null); // Track which task is being edited

	const [editedTask, setEditedTask] = useState("");
	const [editedDate, setEditedDate] = useState("");

	const handleEdit = (task) => {
		setEditingTaskId(task.id);
		setEditedTask(task.title);
		setEditedDate(task.date || "");
	};

	const handleSave = (e, taskId) => {
		e.preventDefault();

		// Validate inputs if needed
		if (!editedTask.trim()) {
			alert("Task title cannot be empty.");
			return;
		}

		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId
					? { ...task, title: editedTask, date: editedDate }
					: task
			)
		);

		setEditingTaskId(null);
		setEditedTask("");
		setEditedDate("");
		setAlertType("success");
	};

	return (
		<ul className="list-items">
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					setAlertType={setAlertType}
					isEditingTask={editingTaskId === task.id}
					handleEdit={handleEdit}
					handleSave={handleSave}
					editedTask={editedTask}
					setEditedTask={setEditedTask}
					editedDate={editedDate}
					setEditedDate={setEditedDate}
					markTaskCompleted={markTaskCompleted}
					setEditingTaskId={setEditingTaskId}
				/>
			))}
		</ul>
	);
}
