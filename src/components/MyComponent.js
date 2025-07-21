// Có 2 cách viết component
// 1. Class component
// 2. function component
import React from "react";
// Viết component bằng class
class MyComponent extends React.Component {
  // Dùng jsx - Cho phép viết code js trong html
  render() {
    return (
      <div>
        My first component
        <br></br>
        SỐ random: {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
