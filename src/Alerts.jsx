import { useEffect } from "react";

export default function Alerts({ alertType, closeAlert }) {
	useEffect(() => {
		if (alertType) {
			const timer = setTimeout(() => {
				closeAlert();
			}, 1500); // alert disappears after 3 seconds
			return () => clearTimeout(timer); // clear the timeout on component unmount
		}
	}, [alertType, closeAlert]);
	return (
		<>
			{alertType === "no-input" && (
				<div className="alert no-input">
					<span className="closebtn" onClick={closeAlert}>
						&times;
					</span>
					Please enter your task!
				</div>
			)}
			{alertType === "success" && (
				<div className="alert success">
					<span className="closebtn" onClick={closeAlert}>
						&times;
					</span>
					Task added successfully!
				</div>
			)}
			{alertType === "repeated" && (
				<div className="alert repeated">
					<span className="closebtn" onClick={closeAlert}>
						&times;
					</span>
					Task is already present in your list!
				</div>
			)}
			{alertType === "completed" && (
				<div className="alert completed">
					<span className="closebtn" onClick={closeAlert}>
						&times;
					</span>
					Task is completed!
				</div>
			)}
		</>
	);
}
