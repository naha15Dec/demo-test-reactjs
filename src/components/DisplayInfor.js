import React from "react";
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
      <div>
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
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
