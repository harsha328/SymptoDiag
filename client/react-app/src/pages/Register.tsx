import { useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import axios from "axios";

interface Credentials {
  name: string;
  mobile: string;
  user_id: string;
  password: string;
  confirm_pwd: string;
}

function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_pwd, setConfirm_pwd] = useState("");
  const [error, setError] = useState("");
  const [credState, setCredState] = useState(true);

  const handleRegister = () => {
    if (mobile.length === 10) {
      const newCredentials: Credentials = {
        name: name,
        mobile: mobile,
        user_id: user_id,
        password: password,
        confirm_pwd: confirm_pwd,
      };

      axios
        .post("http://localhost:3002/Credentials", newCredentials)
        .then((response) => {
          console.log(response.data.existing);
          if (response.data.existing) {
            setError("User already exists. Please try a different User ID.");
          } else {
            alert("Registration successful. Please proceed to login.");
            window.location.href = "/UserLogin";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setError("Mobile number should have exactly 10 digits.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="py-3">Register Here</h2>
        <div className="container py-1">
          <SingleInput
            text="Name"
            placeholder=" "
            handleInput={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="container py-3"></div>
        <div className="container py-3">
          <SingleInput
            text="Mobile"
            placeholder=" "
            handleInput={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className="container py-3">
          <SingleInput
            text="User Id"
            placeholder=" "
            handleInput={(e) => {
              setUser_id(e.target.value);
            }}
          />
        </div>
        <div className="container py-3">
          <SingleInput
            text="Password"
            placeholder=" "
            handleInput={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="container py-3">
          <SingleInput
            text="Confirm"
            placeholder=" "
            handleInput={(e) => {
              setConfirm_pwd(e.target.value);
            }}
          />
        </div>
      </div>
      {error && <p>{error}</p>}
      <ButtonGroup
        text="Submit"
        link="#"
        disabled={password !== confirm_pwd || mobile.length !== 10}
        onSubmit={handleRegister}
      ></ButtonGroup>
      <ButtonGroup
        text="Back"
        link="../"
        disabled={false}
        onSubmit={() => {}}
      ></ButtonGroup>
    </>
  );
}

export default Register;
