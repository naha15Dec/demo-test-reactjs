import { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { listUser } = props;
  // Cách sử dụng useState();
  // Gán biến cho useState() - Vd: const [<tên state>,<Hàm dùng để thay đổi giá trị>] = useState(<Giá trị khởi tạo state>)
  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUsers === true
            ? "Hide list user: "
            : "Show list user:"}
        </span>
      </div>

      {isShowHideListUsers && (
        <>
          {listUser.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  x
                </button>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
