import React from "react";

function Task(props) {
	return (
		<>
			<button
				className="close"
				name={props.id}
				onClick={() => {
					props.remove_item(props.id);
				}}
			>
				X
			</button>
			<span className="tasks">{props.content}</span>
		</>
	);
}

export default Task;
