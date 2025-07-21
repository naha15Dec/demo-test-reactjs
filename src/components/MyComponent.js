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
      listUser: [userObj, ...this.state.listUser],
    });
  };

  handleDeleteUser = (userId) => {
    let listUserClone = [...this.state.listUser];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUser: listUserClone,
    });
  };
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br></br>
          <DisplayInfor
            listUser={this.state.listUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
