import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";

function FullUserList() {
  let [membersState, setMembers] = useState({members: [
    { nick: "Szymek123", email: "xd@dd.com", role: "Administrator" },
    { nick: "Paulinka123", email: "xd2@dd.com", role: "Moderator" },
    { nick: "Piotrek123", email: "xd3@dd.com", role: "Member" },
    { nick: "Marcysia123", email: "xd4@dd.com", role: "Member" }
  ]});

  const promoteMember = (user) => {
    const {members} = membersState
    members.map(member => {
      if(member === user) {
        member.role = "Moderator"
      }
    });
    setMembers({members: [...members]});
  }

  const demoteMember = (user) => {
    const {members} = membersState
    members.map(member => {
      if(member === user) {
        member.role = "Member"
      }
    });
    setMembers({members: [...members]});
  }

  const handleAddMembersClick = () => {
    const name = prompt("Enter nickname: ");

    if(name !== null) {
      setMembers({members: [...members, {nick: name, email: "123@xd.com", role: "Member"}]});
    }
  }

  const handleDeleteMemberClick = (user) => {
    const { members } = membersState
    let filteredArray = members.filter(member => member !== user)
    setMembers({members: filteredArray})
  }

  const { members } = membersState;

  return (
    <div className="App">
      <header>
        <link
        href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
        />
      </header>
      <CalendarHeader page="/Calendar" />
      <h3 className="p-3 text-center">Group Members</h3>
      <div style={{ paddingBottom: "30px" }}>
        <button
          className="btn btn-outline-success"
          onClick={() => {handleAddMembersClick()}}
          style={{
            width: "150px",
            height: "60px",
            fontWeight: "bold",
          }}
        >
          Add Members
        </button>
      </div>
      <table className="table table-hover">
        <thead className="thead-dark">
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
                  <tr key={index} className="table-warning" style={{height: "90px"}}>
                    <td>{member.nick}</td>
                    <td>{member.email}</td>
                    <td>{member.role}</td>
                    <td></td>
                  </tr>
                );
              if (member.role === "Moderator")
                return (
                  <tr key={member.id} className="table-success"style={{height: "90px"}}>
                    <td>{member.nick}</td>
                    <td>{member.email}</td>
                    <td>{member.role}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {handleDeleteMemberClick(member)}}
                        style={{
                          width: "100px",
                          height: "60px",
                          fontWeight: "bold",
                          marginRight: "10px"
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => {demoteMember(member)}}
                        style={{
                          width: "100px",
                          height: "60px",
                          marginLeft: "10px"
                        }}
                      >
                        Demote
                      </button>
                    </td>
                  </tr>
                );
              else
                return (
                  <tr key={member.id}style={{height: "90px"}}>
                    <td>{member.nick}</td>
                    <td>{member.email}</td>
                    <td>{member.role}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {handleDeleteMemberClick(member)}}
                        style={{
                          width: "100px",
                          height: "60px",
                          fontWeight: "bold",
                          marginRight: "10px"
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => {promoteMember(member)}}
                        style={{
                          width: "100px",
                          height: "60px",
                          marginLeft: "10px"
                        }}
                      >
                        Promote
                      </button>
                    </td>
                  </tr>
                );
            })}
        </tbody>
      </table>
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
  );
}

export default FullUserList;
