import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { setRecord } from "../../store/postSlice";
import { showDelModal } from "../../store/uiSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(setRecord(post));
    dispatch(showDelModal());
  };
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td className="text-center">
        <ButtonGroup aria-label="First group">
          <Button variant="primary">Edit</Button>
          <Button variant="danger" type="button" onClick={deleteHandler}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default PostItem;
