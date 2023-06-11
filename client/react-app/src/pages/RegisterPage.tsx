import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const { Formik } = formik;
  const phoneRegExp = /^\d{10}$/;
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    userId: yup.string().required(),
    mobile: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  return (
    <>
      <NavBar />
      <div className="container">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            name: "",
            userId: "",
            mobile: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.name}
                  </Form.Control.Feedback>{" "}
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername2"
                >
                  <Form.Label>User Id</Form.Label>
                  <InputGroup hasValidation className="w-100">
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="user Id"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.userId}
                      onChange={handleChange}
                      isInvalid={!!errors.userId}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.userId}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label>mobile</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    isInvalid={!!errors.mobile}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationFormik104"
                  className="position-relative"
                >
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationFormik105"
                  className="position-relative"
                >
                  <Form.Label>confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="confirmPassword"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default RegisterPage;
