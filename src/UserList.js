import React from "react";
class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: "Text User",
          email: "textuser@gmail.com",
        },
        {
          id: 2,
          name: "Anne Hunter",
          email: "annehunter@mail.com",
        },
        {
          id: 3,
          name: "Jale Boser",
          email: "jale@yahoo.com",
        },
      ],
    };
  }
  handleDelete = (id) => {
    const filteredUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: filteredUsers });
  };
  render() {
    return (
      <>
        <h2>This is UserList Page</h2>
        <table border="2" cellSpacing={0} cellPadding={2}>
          <thead padding={0}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <a href={`/edit${item.name}`}>Edit</a>|
                  <a href="#" onClick={() => this.handleDelete(item.id)}>
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default UserList;

// function UserList() {
//     return (
//     <>
//      <div>Welcome to the UseList page</div>
//     </>
//     );
// }

// export default UserList;
