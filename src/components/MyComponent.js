// Có 2 cách viết component
// 1. Class component
// 2. function component
import React from "react";
import UserInfor from "./UserInfo";
// Viết component bằng class
class MyComponent extends React.Component {
  render() {
    return (
      <>
        <UserInfor></UserInfor>
      </>
    );
  }
}

export default MyComponent;
