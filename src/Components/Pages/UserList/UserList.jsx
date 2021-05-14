import React from "react";
import StyleWrapper from "./UserList.style";
import axios from "axios";
import { USER_LIST } from "../../../Utils/urls";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    axios
      .get(USER_LIST)
      .then((response) => {
        this.setState({ userList: response.data && response.data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleRowClick = (id) => {
    this.props.history.push('/user-details', {
        id: id,
    })
  };

  displayUser = () => {
    const { userList = [] } = this.state;
    const listData = userList.map((user) => {
      const { avatar = "", first_name = "", last_name = "", email = "" } = user;
      return (
        <tr
          key={user.id}
          onClick={() => this.handleRowClick(user.id)}
          tabIndex="0"
        >
          <td>
            <div className="avatar-wrapper">
              <img src={avatar} alt={first_name} />
            </div>
          </td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
        </tr>
      );
    });
    return listData;
  };

  render() {
    return (
      <StyleWrapper>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.displayUser()}</tbody>
        </table>
      </StyleWrapper>
    );
  }
}

export default UserList;
