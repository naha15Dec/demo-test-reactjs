import React from "react";
class UserInfor extends React.Component {
  state = {
    name: "Nhật Hào",
    age: 21,
    address: "binhduong",
  };

  //   handleClick() {
  //     console.log("My name is", this.state.name);
  //   } Lỗi
  // Sử dụng arrow function hết lỗi
  handleOnChangeText = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleOnChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  // Ngăn chặn hành vi mặc định của form
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div>My name is {this.state.name}</div> and I'm {this.state.age}
        <form onSubmit={this.handleSubmit}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={this.handleOnChangeText}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={this.handleOnChangeAge}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default UserInfor;
