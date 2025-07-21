// Có 2 cách viết component
// 1. Class component
// 2. function component
import React from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfor";
// Viết component bằng class
class MyComponent extends React.Component {
  render() {
    const myInfor = ["a,", "b", "c"];
    return (
      <>
        <UserInfor />
        <br></br>
        <br></br>
        <DisplayInfor name="Nhật Hào" age="18" />{" "}
        {/* Truyền 2 thuộc tính name và age xuống component con (DisplayInfor) */}
        <hr />
        {/* Gọi lại components và truyền thuộc tính mới cho nó */}
        {/* Lưu ý:  Nếu muốn truyền các kiểu dữ liệu khác ngaoif string thì phải viết trong cặp dấu {}, còn kh sẽ bị lỗi */}
        <DisplayInfor
          name="KunSiuCap"
          age={10}
          isBoy={true}
          myInfor={myInfor}
          // Truyền mảng
        />
      </>
    );
  }
}

export default MyComponent;
