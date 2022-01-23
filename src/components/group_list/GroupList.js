import React from "react";
import GroupPlaque from "./GroupPlaque";
import { Button } from "react-bootstrap";
import { preventDefault } from "@fullcalendar/react";

export default function GroupList(props) {
	const [checked, setChecked] = React.useState(
		Array.from(props.groupInstances)
	);

	const handleChange = (index) => {
		console.log(checked[index]);
		let nc = Array.from(checked);
		nc[index].checked = !nc[index].checked;
		console.log(nc[index]);
		setChecked(nc);
		props.toParentHandler(nc);
	};

	const handleAddGroupClick = () => {
		const name = prompt("Enter group name: ");
        let newChecked = Array.from(checked);
        newChecked.push({id: checked.lastIndex+1, name: name, status: 'a'})
        setChecked(newChecked);
	};

	return (
		<div
			style={{
				overflow: "auto",
				height: `Calc(100vh - 48px)`,
				width: "auto",
				backgroundColor: "#C71F28",
			}}
		>
			<div style={{padding: "5px"}}>
				{checked.map((groupInstance, index) => {
					return (
						<GroupPlaque
							key={index}
							groupInstance={groupInstance}
							onChange={() => handleChange(index)}
							checked={checked[index]}
						/>
					);
				})}
			</div>
			<div style={{ padding: "5px" }}>
				<Button
					style={{ width: "100%" }}
					className="btn btn-light"
					onClick={() => {
						handleAddGroupClick();
					}}
				>
					Dodaj grupę
				</Button>
			</div>
		</div>
	);
}
