import React from "react";
import { Link } from "react-router-dom";

export default function GroupPlaque(props) {
	const [checked, setChecked] = React.useState(props.checked);
	return (
		<div style={{ padding: 2 }}>
			<header>
				<link
					href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					rel="stylesheet"
				/>
			</header>
			<div
				style={{
					backgroundColor: "white",
					height: 60,
					width: 240,
					borderRadius: 10,
				}}
			>
				<div style={{ float: "right", padding: 10 }}>
					{props.groupInstance.status}
				</div>
				<div style={{ height: 30 }}>
					<span>
						<input
							name={props.groupInstance.name}
							checked={checked}
							onChange={() => {
								props.onChange();
								setChecked(!checked);
							}}
							type="checkbox"
							className="formCheck"
							style={{ minWidth: 30, height: 30, margin: 15 }}
						/>
					</span>
					<span>
						<div style={{ float: "left", margin: 10 }}>
							<Link to="FullUserList">
								<button
									className="btn btn-danger"
									style={{
										minWidth: 80,
										height: 40,
										fontSize: "13px",
									}}
								>
									{props.groupInstance.name}
								</button>
							</Link>
						</div>
					</span>
				</div>
			</div>
		</div>
	);
}
