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
   
    user_id: string;
    password: string;
    
  }

function LoginPage() {
  const { Formik } = formik;
  const navigate = useNavigate();
   const initValues:Credentials={
    
    user_id: "",
    password: "",

   }

  const handleSubmit=async(values:Credentials)=>{
    console.log(values)
    axios
    .post("http://localhost:3002/Credentials/auth",values)
    .then((response) => {
      console.log(response.data);

      if(!response.data.error){
        navigate('../Details')
      }
      console.log(response.data.error);
    });
  }
  const schema = yup.object().shape({
    user_id: yup.string().required(),
   
    password: yup.string().required(),
  });

  return (
    <>
      <NavBar />
      <div className="container">
      <Row className="mb-3 text-center">

      <h2 className="py-5 " > Login Now! </h2>
      </Row>
        <Formik
          validationSchema={schema}
          onSubmit={(values:Credentials)=>{
            handleSubmit(values);
          }}
          initialValues={initValues}
          
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="mx-auto">
              
              <Row className="mb-3 justify-content-center">
              
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername2"
                  className="position-relative "

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

              <Row className="mb-3 justify-content-center ">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik104"
                  className="position-relative "
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
                
              </Row>
              <Row className="mb-3 mt-5 justify-content-center">

              <Button type="submit" className="w-25 ">Submit </Button>
              </Row>

            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginPage;
