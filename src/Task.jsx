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
			<p className="tasks">{props.content}</p>
		</>
	);
}

export default Task;
