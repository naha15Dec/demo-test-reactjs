import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // props => viết tắt properties
    // this.props - Trả về obj chứa toàn bộ thuộc tính được truyền từ component cha xuống
    // Viết gọn code với detructuring object
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <>
        {listUser.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My age's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My age's {age}</div>  */}
      </>
    );
  }
}

export default DisplayInfor;
