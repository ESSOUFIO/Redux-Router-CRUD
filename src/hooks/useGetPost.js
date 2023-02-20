import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost, resetRecord } from "../store/postSlice";

export const useGetPost = () => {
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
  return { record };
};
