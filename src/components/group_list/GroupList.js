import React from "react";
import GroupPlaque from "./GroupPlaque";

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

	return (
		<div
			style={{
				overflow: "auto",
				height: `Calc(100vh - 48px)`,
				width: "auto",
				float: "left",
				backgroundColor: "#C71F28",
			}}
		>
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
	);
}
