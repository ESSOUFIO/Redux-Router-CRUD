import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchPost, resetRecord } from "../store/postSlice";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { record } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPost(id));
    return () => {
      //run when leaving page
      dispatch(resetRecord());
    };
  }, [dispatch, id]);

  return (
    <Loading>
      <h2>Post Details</h2>
      <p>
        ID: <b>{record?.id}</b>
      </p>
      <p>
        Title: <b>{record?.title}</b>
      </p>
      <p>
        Description: <b>{record?.description}</b>
      </p>
    </Loading>
  );
};

export default PostDetails;
