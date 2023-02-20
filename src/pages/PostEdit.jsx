import React, { useEffect, useRef } from "react";
import { useGetPost } from "../hooks/useGetPost";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editPost } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import withGuard from "../utils/withGuard";

const PostEdit = () => {
  const { record } = useGetPost();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPost({
        id: idRef.current.value,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    idRef.current.value = record?.id;
    titleRef.current.value = record?.title;
    descriptionRef.current.value = record?.description;
  }, [record]);

  return (
    <div className="col-8">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control type="text" disabled ref={idRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Put the post's title here .."
            ref={titleRef}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" ref={descriptionRef} rows={4} />
        </Form.Group>

        <Loading>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Loading>
      </Form>
    </div>
  );
};

export default withGuard(PostEdit);
