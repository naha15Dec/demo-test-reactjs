// Có 2 cách viết component
// 1. Class component
// 2. function component
import React from "react";
// Viết component bằng class
class MyComponent extends React.Component {
  state = {
    name: "Nhật Hào",
    age: 21,
    address: "binhduong",
  };
  //   handleClick() {
  //     console.log("My name is", this.state.name);
  //   } Lỗi
  // Sử dụng arrow function hết lỗi
  handleClick = () => {
    console.log("My name is", this.state.name);
    this.setState({
      name: "KunĐẹpChai",
      age: Math.floor(Math.random() * 100),
    });
  };

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value,
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
          <input type="text" onChange={this.handleOnChange} />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default MyComponent;
