import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../Services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TabbleQuiz";
import Accordion from "react-bootstrap/Accordion";

const options = [
  { value: "EASY", label: "Easy" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HARD", label: "Hard" },
];

const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(null);
  const [image, setImage] = useState(null);

  const [listQuiz, setListQuiz] = useState([]);

  const handleChangeFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error("Name/Description is required");
      return;
    }
    let res = await postCreateNewQuiz(name, description, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setType(null);
      setImage(null);
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
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
                  defaultValue={type}
                  onChange={setType}
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
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-success mt-3"
                  onClick={() => handleSubmitQuiz()}
                >
                  Save
                </button>
              </div>
            </fieldset>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="list-detail">
        <TableQuiz listQuiz={listQuiz} setListQuiz={setListQuiz} />
      </div>
    </div>
  );
};

export default ManageQuiz;
