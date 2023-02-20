import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setRecord } from "../../store/postSlice";
import { showDelModal } from "../../store/uiSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const deleteHandler = () => {
    dispatch(setRecord(post));
    dispatch(showDelModal());
  };

  const editHandler = () => {
    navigate(`post/${post.id}/edit`);
  };

  return (
    <tr>
      <td>{post.id}</td>
      <td>
        <Link to={`post/${post.id}/details`}>{post.title}</Link>
      </td>
      <td className="text-center">
        <ButtonGroup aria-label="First group">
          <Button
            variant="primary"
            disabled={!isLoggedIn}
            onClick={editHandler}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={deleteHandler}
            disabled={!isLoggedIn}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default PostItem;
