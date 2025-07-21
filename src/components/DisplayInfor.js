import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // props => viết tắt properties
    // this.props - Trả về obj chứa toàn bộ thuộc tính được truyền từ component cha xuống
    // Viết gọn code với detructuring object
    const { name, age } = this.props;
    return (
      <>
        {console.log(this.props)}
        {/* Nhận thuộc tính {name: 'Nhật Hào', age: '18'} được truyền từ component cha (MyComponent) xuống */}
        {/* <div>My name's {this.props.name}</div>
        <div>My age's {this.props.age}</div> */}
        <div>My name's {name}</div>
        <div>My age's {age}</div>
      </>
    );
  }
}

export default DisplayInfor;
