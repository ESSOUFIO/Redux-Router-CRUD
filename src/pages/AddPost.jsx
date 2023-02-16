import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../store/postSlice";

const AddPost = () => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const id = Math.floor(Math.random() * 1000);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .then(() => {
        document.querySelector("#addPost").classList.remove("active");
      });
  };

  return (
    <div className="col-8">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control type="text" disabled value={id} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Put the post's title here .."
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" ref={descriptionRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddPost;
