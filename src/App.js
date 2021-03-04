import React, { useState } from "react";
import Task from "./Task";

function App() {
	const [note, update_note] = useState("");
	const [notes, add_notes] = useState([]);

	const update = (event) => {
		const value = event.target.value;
		update_note(value);
	};

	const add_note = () => {
		add_notes((oldNotes) => {
			if (note.trim() !== "") return [note, ...oldNotes];
			else return oldNotes;
		});
		update_note("");
	};

	function remove_item(id) {
		add_notes((oldNotes) => {
			return oldNotes.filter((ele, ind) => {
				return ind !== id;
			});
		});
	}

	return (
		<div className="whole_page">
			<div className="todolist">
				<h1> MY TODO APP </h1>
				<input
					type="text"
					id="note"
					placeholder="Add a note here..."
					value={note}
					name="user_note"
					onChange={update}
				/>
				<span>
					<button className="add" onClick={add_note}>
						+
					</button>
				</span>
				<div className="tasks_body">
					{notes.map((val, ind) => {
						return (
							<Task
								content={val}
								key={ind}
								id={ind}
								remove_item={remove_item}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
