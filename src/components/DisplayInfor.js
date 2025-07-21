import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    isShowHideUsers: true,
  };
  handleShowHide = () => {
    this.setState({ isShowHideUsers: !this.state.isShowHideUsers });
  };
  render() {
    const { listUser } = this.props;
    return (
      <div className="display-infor-container">
        <img src={logo} alt="Logo" />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowHideUsers === true
              ? "Hide list user:"
              : "Show list user:"}
          </span>
        </div>
        {/* sử dụng điều kiện và && - Nếu nó true thì thực hiện, false thì kh thực hiện */}
        {/* Syntax: condition && <phần tử html> */}
        {this.state.isShowHideUsers && (
          <>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
