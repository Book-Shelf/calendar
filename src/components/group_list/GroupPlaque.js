import React from "react";
import { Link } from "react-router-dom";
import "./GroupPlaque.css";

export default function GroupPlaque(props) {
	const [checked, setChecked] = React.useState(props.checked);
	const [color, setColor] = React.useState(props.groupInstance.color)
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
				<div className="Plaque-container">
					<div>
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
					</div>
					<div className="colorPicker-wrapper">
						<input className="ble"
							type="color"
							id="colorPicker"
							width="5px"
							value={color}
							onChange={(e) => {
								setColor(e.target.value)
								props.handleChangeColor(props.groupInstance, e.target.value)
							}}
						/>
					</div>
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
				</div>
			</div>
		</div>
	);
}
