import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { addPost } from "../store/postSlice";
import withGuard from "../utils/withGuard";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string().required("Required"),
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
            placeholder="Put the post's title here .."
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            autoFocus
          />
          <div style={{ color: "red" }}>
            {formik.errors.title && formik.touched.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            rows={4}
          />
          <div style={{ color: "red" }}>
            {formik.errors.description && formik.touched.description ? (
              <div>{formik.errors.description}</div>
            ) : null}
          </div>
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
