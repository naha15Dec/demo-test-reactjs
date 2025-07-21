// Có 2 cách viết component
// 1. Class component
// 2. function component
import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfor";
// Viết component bằng class
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Nhật Hào", age: 18 },
      { id: 2, name: "Kun", age: 20 },
      { id: 3, name: "Naha", age: 22 },
    ],
  };
  render() {
    return (
      <>
        <UserInfor />
        <br></br>
        <DisplayInfor listUser={this.state.listUser} />
      </>
    );
  }
}

export default MyComponent;
