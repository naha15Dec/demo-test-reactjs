import { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("Nhật Hào");
  const [age, setAge] = useState("21");
  // const [address, setAddress] = useState("BinhDuong");

  const handleOnChangeText = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAge = (e) => {
    setAge(e.target.value);
  };

  // Ngăn chặn hành vi mặc định của form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <>
      <div>My name is {name}</div> and I'm {age}
      <form onSubmit={handleSubmit}>
        <label>Your name: </label>
        <input value={name} type="text" onChange={handleOnChangeText} />
        <button>Submit</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label>Your age: </label>
        <input value={age} type="text" onChange={handleOnChangeAge} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddUserInfor;
