import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const ModalResult = (props) => {
  const { show, setShow, data } = props;

  const handleClose = () => setShow(false);

  // const handleSubmitDeleteUser = async () => {
  //   let data = await deleteUser(dataDelete.id);
  //   if (data && data.EC === 0) {
  //     toast.success(data.EM);
  //     handleClose();
  //     props.setCurrentPage(1);
  //     await props.fetchListUser(1);
  //   }

  //   if (data && data.EC !== 0) {
  //     toast.error(data.EM);
  //   }
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Total Question: <b>{data.countTotal}</b>
          </div>
          <div>
            Total Correct Answers: <b>{data.countCorrect}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Show answers
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalResult;
