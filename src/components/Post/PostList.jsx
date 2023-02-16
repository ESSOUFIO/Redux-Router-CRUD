import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const PostList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2563</td>
          <td>This 1st title</td>
          <td>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button>1</Button>
              <Button>2</Button>
            </ButtonGroup>
          </td>
        </tr>
        <tr>
          <td>2563</td>
          <td>This 1st title</td>
          <td>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button>1</Button>
              <Button>2</Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PostList;
