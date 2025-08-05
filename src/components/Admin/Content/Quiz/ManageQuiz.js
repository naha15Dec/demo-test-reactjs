import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";

const options = [
  { value: "EASY", label: "Easy" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HARD", label: "Hard" },
];

const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState(null);

  const handleChangeFile = () => {};
  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
      <div className="add-new">
        <fieldset className="border rounded-3 p-3">
          <legend className="float-none w-auto px-3">Add new quiz:</legend>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Quiz name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Description</label>
          </div>
          <div className="my-3">
            <Select
              value={type}
              // onChange={this.handleChange}
              placeholder={"Quiz type..."}
              options={options}
            />
          </div>
          <div className="more-actions">
            <label className="mb-1">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleChangeFile(e)}
            ></input>
          </div>
        </fieldset>
      </div>
      <div className="detail"></div>
    </div>
  );
};

export default ManageQuiz;
