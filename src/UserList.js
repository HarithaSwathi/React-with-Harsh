import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    
    // Retrieve stored users from Local Storage or set default users
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [
      { id: 1, name: "Text User", email: "textuser@gmail.com" },
      { id: 2, name: "Anne Hunter", email: "annehunter@mail.com" },
      { id: 3, name: "Jale Boser", email: "jale@yahoo.com" },
    ];

    this.state = {
      users: savedUsers,
      editUserId: null, // Stores ID of user being edited
      editName: "",
      editEmail: "",
    };
  }

  // Update Local Storage whenever users state changes
  updateLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Handle Edit Click - Set edit mode
  handleEdit = (user) => {
    this.setState({
      editUserId: user.id,
      editName: user.fullname,
      editEmail: user.email,
    });
  };

  // Handle Input Change for Edit Fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Save Edited User
  handleSave = () => {
    const { editUserId, editName, editEmail, users } = this.state;

    const updatedUsers = users.map((user) =>
      user.id === editUserId ? { ...user, name: editName, email: editEmail } : user
    );

    this.setState({ users: updatedUsers, editUserId: null }, () => {
      this.updateLocalStorage(this.state.users);
    });
  };

  // Delete User (with confirmation alert)
  handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      const updatedUsers = this.state.users.filter(user => user.id !== id);
      this.setState({ users: updatedUsers }, () => {
        this.updateLocalStorage(this.state.users);
      });
    }
  };

  // Cancel Edit
  handleCancel = () => {
    this.setState({ editUserId: null });
  };

  render() {
    return (
      <div>
        <h2>User List</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                {this.state.editUserId === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="editName"
                        value={this.state.editName}
                        onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="editEmail"
                        value={this.state.editEmail}
                        onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <button onClick={this.handleSave}>Save</button>
                      <button onClick={this.handleCancel}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => this.handleEdit(user)}>Edit</button>
                      <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
