export default function Button({ children, onClearList }) {
	return (
		<button className="clear" onClick={onClearList}>
			{children}
		</button>
	);
}
