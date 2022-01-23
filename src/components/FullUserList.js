import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader.js";

function FullUserList(props) {
	let [membersState, setMembers] = useState({
		members: [
			{ nick: "Szymek123", email: "xd@dd.com", role: "Administrator" },
			{ nick: "Paulinka123", email: "xd2@dd.com", role: "Moderator" },
			{ nick: "Piotrek123", email: "xd3@dd.com", role: "Member" },
			{ nick: "Marcysia123", email: "xd4@dd.com", role: "Member" },
		],
	});

	let allUsers = [
		{ nick: "Szymek123", email: "xd@dd.com", role: "Administrator" },
		{ nick: "Paulinka123", email: "xd2@dd.com", role: "Moderator" },
		{ nick: "Piotrek123", email: "xd3@dd.com", role: "Member" },
		{ nick: "Marcysia123", email: "xd4@dd.com", role: "Member" },
		{ nick: "jorge", email: "jorge@maxi.com", role: "Member" },
		{ nick: "angie", email: "mat@gmail.com", role: "Member" },
		{ nick: "hah", email: "haha@wp.pl", role: "Member" },
	];

	const promoteMember = (user) => {
		const { members } = membersState;
		members.map((member) => {
			if (member === user) {
				member.role = "Moderator";
			}
		});
		setMembers({ members: [...members] });
	};

	const demoteMember = (user) => {
		const { members } = membersState;
		members.map((member) => {
			if (member === user) {
				member.role = "Member";
			}
		});
		setMembers({ members: [...members] });
	};

	const handleAddMembersClick = () => {
		const name = prompt("Enter nickname: ");
		let canAdd = false;

		allUsers.map((user) => {
			if (user.nick === name) {
				setMembers({
					members: [
						...members,
						{ nick: name, email: user.email, role: "Member" },
					],
				});
				canAdd = true;
			}
		});
		if (canAdd === false && name != null) {
			window.alert("This user does not exist or was already added to group");
		}    
	};

	const handleDeleteMemberClick = (user) => {
		const { members } = membersState;
		if (
			window.confirm(
				`Are you sure you want to delete this member: '${user.nick}'?`
			)
		) {
			let filteredArray = members.filter((member) => member !== user);
			setMembers({ members: filteredArray });
		}
	};

	const { members } = membersState;

	return (
		<div
			style={{
				width: "100%",
				position: "absolute",
				top: "0",
				left: "0",
				margin: "0",
			}}
		>
			<CalendarHeader page="/Calendar" />
			<div className="App">
				<header>
					<link
						href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
						rel="stylesheet"
					/>
				</header>

				<h3 className="p-3 text-center">Group Members</h3>
				<div style={{ paddingBottom: "30px" }}>
					<button
						className="btn btn-outline-success"
						onClick={() => {
							handleAddMembersClick();
						}}
						style={{
							width: "150px",
							height: "60px",
							fontWeight: "bold",
						}}
					>
						Add Members
					</button>
				</div>
				<div
					style={{
						position: "relative",
						height: "600px",
						overflow: "auto",
						display: "block",
					}}
				>
					<table
						className="table table-hover"
						style={{ minWidth: "600px",width: "60%", alignItems: "center", margin: "auto" }}
					>
						<thead
							className="thead-dark"
							style={{ position: "sticky", top: "0" }}
						>
							<tr>
								<th>Nickname</th>
								<th>Email</th>
								<th>Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{members &&
								members.map((member, index) => {
									if (member.role === "Administrator")
										return (
											<tr
												key={index}
												className="table-warning"
												style={{ height: "90px" }}
											>
												<td>{member.nick}</td>
												<td>{member.email}</td>
												<td>{member.role}</td>
												<td></td>
											</tr>
										);
									if (member.role === "Moderator")
										return (
											<tr
												key={member.id}
												className="table-success"
												style={{ height: "90px" }}
											>
												<td>{member.nick}</td>
												<td>{member.email}</td>
												<td>{member.role}</td>
												<td>
													<button
														className="btn btn-outline-danger"
														onClick={() => {
															handleDeleteMemberClick(member);
														}}
														style={{
															width: "100px",
															height: "60px",
															fontWeight: "bold",
															marginRight: "10px",
														}}
													>
														{/* Delete */}
                            <img src="https://img.icons8.com/pastel-glyph/50/000000/trash.png" height="30" alt="Delete"/> Delete
													</button>
													<button
														className="btn btn-outline-light"
														onClick={() => {
															demoteMember(member);
														}}
														style={{
															width: "100px",
															height: "60px",
															marginLeft: "10px",
														}}
													>
														<img src="https://img.icons8.com/ios/50/000000/star-half.png" height="30" alt="Demote"/>Demote
													</button>
												</td>
											</tr>
										);
									else
										return (
											<tr key={member.id} style={{ height: "90px" }}>
												<td>{member.nick}</td>
												<td>{member.email}</td>
												<td>{member.role}</td>
												<td>
													<button
														className="btn btn-outline-danger"
														onClick={() => {
															handleDeleteMemberClick(member);
														}}
														style={{
															width: "100px",
															height: "60px",
															fontWeight: "bold",
															marginRight: "10px",
														}}
													>
														{/* Delete */}
                            <img src="https://img.icons8.com/pastel-glyph/50/000000/trash.png" height="30" alt="Delete"/> Delete
													</button>
													<button
														className="btn btn-outline-warning"
														onClick={() => {
															promoteMember(member);
														}}
														style={{
															width: "100px",
															height: "60px",
															marginLeft: "10px",
														}}
													>
														{/* Promote */}
                            <img src="https://img.icons8.com/ios/50/000000/star.png" height="30" alt="Promote"/> Promote
													</button>
												</td>
											</tr>
										);
								})}
						</tbody>
					</table>
				</div>
				<div style={{ paddingTop: "30px" }}>
					<button
						className="btn btn-danger"
						style={{
							width: "150px",
							height: "60px",
							fontWeight: "bold",
						}}
					>
						Delete Group
					</button>
				</div>
			</div>
		</div>
	);
}

export default FullUserList;
