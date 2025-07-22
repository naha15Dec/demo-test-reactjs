import React, { useState } from "react";
import "./DisplayInfor.scss";
// import logo from "../logo.svg";
// class DisplayInfor extends React.Component {
//   render() {
//     console.log(">>> check render");
//     const { listUser } = this.props;
//     return (
//       <div className="display-infor-container">
//         <div></div>
//         {/* sử dụng điều kiện và && - Nếu nó true thì thực hiện, false thì kh thực hiện */}
//         {/* Syntax: condition && <phần tử html> */}
//         {true && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     x
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser } = props;
  // Cách sử dụng useState();
  // Gán biến cho useState() - Vd: const [<tên state>,<Hàm dùng để thay đổi giá trị>] = useState(<Giá trị khởi tạo state>)
  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };
  /*
  state ={
    isShowHideListUsers: true
  }

  setState({
    isShowHideListUsers: false
  })
  */
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUsers === true
            ? "Hide list user: "
            : "Show list user:"}
        </span>
      </div>
      {/* sử dụng điều kiện và && - Nếu nó true thì thực hiện, false thì kh thực hiện */}
      {/* Syntax: condition && <phần tử html> */}
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
