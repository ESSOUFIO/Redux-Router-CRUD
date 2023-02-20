import Loading from "../components/Loading";
import { useGetPost } from "../hooks/useGetPost";

const PostDetails = () => {
  const { record } = useGetPost();

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
