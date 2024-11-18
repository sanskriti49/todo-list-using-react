import { useState } from "react";
import Header from "./Header";
import InputBox from "./InputBox";
import TaskList from "./TaskList";
import Alerts from "./Alerts";
import Button from "./Button";
import "./App.css";

function App() {
	const initialTasks = [
		{
			id: 1,
			title: "Doctor Appointment",
			completed: true,
		},
		{
			id: 2,
			title: "Meeting at School",
			completed: false,
		},
	];

	const [inputTask, setInputTask] = useState("");
	const [taskDate, setTaskDate] = useState("");
	const [tasks, setTasks] = useState(initialTasks);
	const [isEditing, setIsEditing] = useState(false);
	const [isCleared, setIsCleared] = useState(false);
	const [alertType, setAlertType] = useState(null); // 'success', 'error', etc.

	function handleClearList() {
		const confirmed = window.confirm(
			"Are your sure want to delete all the items?"
		);
		if (confirmed) {
			setTasks([]);
			setIsCleared(true);
		}
	}

	// Function to close the alert
	const closeAlert = () => {
		setAlertType(null);
	};

	const markTaskCompleted = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: true } : task
			)
		);
		setIsEditing(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputTask) {
			setAlertType("no-input");
			return;
		}

		// Check if the task already exists
		if (
			tasks.some((task) => task.title.toLowerCase() === inputTask.toLowerCase())
		) {
			setAlertType("repeated");
			return;
		}
		const newTask = {
			title: inputTask,
			id: Date.now(),
			date: taskDate,
			completed: false,
		};

		// Add the new task to the tasks list
		setTasks((prevTasks) => [...prevTasks, newTask]);
		setInputTask("");
		setTaskDate("");
		setAlertType("success");
	};

	return (
		<>
			<div className="container">
				<Header />
				<InputBox
					inputTask={inputTask}
					setInputTask={setInputTask}
					taskDate={taskDate}
					setTaskDate={setTaskDate}
					handleSubmit={handleSubmit}
				/>
				<TaskList
					setAlertType={setAlertType}
					tasks={tasks}
					setTasks={setTasks}
					markTaskCompleted={markTaskCompleted}
				/>
				<Button onClearList={handleClearList}>Clear</Button>

				<Alerts alertType={alertType} closeAlert={closeAlert} />
			</div>
		</>
	);
}

export default App;
