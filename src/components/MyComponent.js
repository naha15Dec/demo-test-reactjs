// Có 2 cách viết component
// 1. Class component
// 2. function component
import React from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";
// Viết component bằng class
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Nhật Hào", age: 16 },
      { id: 2, name: "Kun", age: 20 },
      { id: 3, name: "Naha", age: 22 },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUser: [...this.state.listUser, userObj],
    });
  };
  render() {
    return (
      <>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br></br>
        <DisplayInfor listUser={this.state.listUser} />
      </>
    );
  }
}

export default MyComponent;
