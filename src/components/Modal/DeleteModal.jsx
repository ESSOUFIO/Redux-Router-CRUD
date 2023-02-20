import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/postSlice";
import { hideDelModal } from "../../store/uiSlice";

const DeleteModal = () => {
  const { delModal } = useSelector((state) => state.ui);
  const { record } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDelModal());
  };

  const deleteHandler = () => {
    dispatch(deletePost(record))
      .unwrap()
      .then(() => {
        handleClose();
      });
  };

  return (
    <Modal show={delModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you wat to delete this post?
        <h6>{record?.title}</h6>`
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" type="button" onClick={deleteHandler}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
