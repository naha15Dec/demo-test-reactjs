// Có 2 cách viết component
// 1. Class component
// 2. function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Nhật Hào", age: 16 },
    { id: 2, name: "Kun", age: 20 },
    { id: 3, name: "Naha", age: 22 },
  ]);
  const handleAddNewUser = (userObj) => {
    // this.setState({
    //   listUser: [userObj, ...this.state.listUser],
    // });
    setListUser([userObj, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUser];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone);
  };
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br></br>
        <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
