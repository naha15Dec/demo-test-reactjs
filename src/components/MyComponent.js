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
  handleClick() {
    console.log("Clicked");
  }
  render() {
    return (
      <>
        <div>My name is {this.state.name}</div> and I'm from{" "}
        {this.state.address}
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}

export default MyComponent;
