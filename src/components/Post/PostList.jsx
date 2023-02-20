import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/postSlice";
import Loading from "../Loading";
import PostItem from "./PostItem";

const PostList = () => {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postList = records.map((el) => <PostItem key={el.id} post={el} />);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th className="w-100">Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{postList}</tbody>
      </Table>
      <Loading />
    </>
  );
};

export default PostList;
