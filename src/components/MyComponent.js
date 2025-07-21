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
  render() {
    return (
      <>
        <div>My name is {this.state.name}</div> and I'm {this.state.age}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click me
        </button>
      </>
    );
  }
}

export default MyComponent;
