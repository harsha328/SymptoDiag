import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Credentials {
    name: string;
    mobile: string;
    user_id: string;
    password: string;
    confirm_pwd: string;
  }

function RegisterPage() {
  const { Formik } = formik;
  const phoneRegExp = /^\d{10}$/;
  const navigate = useNavigate();
   const initValues:Credentials={
    
    name: "",
    user_id: "",
    mobile: "",
    password: "",
    confirm_pwd: "",

   }

  const handleSubmit=async(values:Credentials)=>{
    axios
    .post("http://localhost:3002/Credentials", values)
    .then((response) => {
      console.log(response.data);

      if(!response.data.error){
        navigate('../UserLogin')
      }
      console.log(response.data.error);
    });
  }
  const schema = yup.object().shape({
    name: yup.string().required(),
    user_id: yup.string().required(),
    mobile: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    password: yup.string().required(),
    confirm_pwd: yup.string().required(),
  });

  return (
    <>
      <NavBar />
      <div className="container">
        <Formik
          validationSchema={schema}
          onSubmit={(values:Credentials)=>{
            handleSubmit(values);
          }}
          initialValues={initValues}
          
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="mx-auto">
              <Row className="mb-3 justify-content-between">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik101"
                  className="position-relative ms-5"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="name"
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
                  controlId="validationFormik103"
                  className="position-relative me-5"
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
                  md="4"
                  controlId="validationFormikUsername2"
                  className="position-relative ms-5"

                >
                  <Form.Label>User Id</Form.Label>
                  <InputGroup hasValidation className="w-100">
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="user Id"
                      aria-describedby="inputGroupPrepend"
                      name="user_id"
                      value={values.user_id}
                      onChange={handleChange}
                      isInvalid={!!errors.user_id}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.user_id}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3 justify-content-between ">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik104"
                  className="position-relative ms-5"
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
                  md="4"
                  controlId="validationFormik105"
                  className="position-relative me-5"
                >
                  <Form.Label>confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="confirm Password"
                    name="confirm_pwd"
                    value={values.confirm_pwd}
                    onChange={handleChange}
                    isInvalid={!!errors.confirm_pwd}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.confirm_pwd}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">

              <Button type="submit" className="w-25 mx-auto">Submit form</Button>
              </Row>

            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default RegisterPage;
