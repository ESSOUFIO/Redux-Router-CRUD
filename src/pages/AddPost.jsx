import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { addPost } from "../store/postSlice";
import withGuard from "../utils/withGuard";
import * as yup from "yup";
import { useFormik } from "formik";

const FormSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

const AddPost = () => {
  const navigate = useNavigate();
  const id = Math.floor(Math.random() * 1000);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: id,
      title: "",
      description: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      dispatch(addPost(values))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .then(() => {
          document.querySelector("#addPost").classList.remove("active");
        });
    },
  });

  return (
    <div className="col-8">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control
            name="id"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.id}
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            isValid={formik.values.title && !formik.errors.title}
            isInvalid={!!formik.errors.title}
            autoFocus
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.title}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            isValid={formik.values.description && !formik.errors.description}
            isInvalid={!!formik.errors.description}
            rows={4}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.description}
          </Form.Control.Feedback>
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

export default withGuard(AddPost);
