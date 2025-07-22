import React from "react";
import "./DisplayInfor.scss";
// import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> check constructor");

    super(props);
    this.state = {
      isShowHideUsers: true,
    };
  }

  componentDidMount() {
    // Sau khi hàm render chạy xong thì hàm này sẽ đuọce gọi
    console.log(">>> check compponent did mount");
    setTimeout(() => {
      document.title = "Naha";
    }, 3000);
  }

  componentDidUpdate() {
    // Sau khi thay đổi props hay setState thì sẽ render lại giao diện và chạy vào hàm này
    console.log(">>> check component did update");
  }

  handleShowHide = () => {
    this.setState({ isShowHideUsers: !this.state.isShowHideUsers });
  };
  render() {
    console.log(">>> check render");
    const { listUser } = this.props;
    return (
      <div className="display-infor-container">
        {/* <img src={logo} alt="Logo" /> */}
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
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
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
  }
}

export default DisplayInfor;
