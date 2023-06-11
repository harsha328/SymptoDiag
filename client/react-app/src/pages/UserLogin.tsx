import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
import PasswordInput from "../components/PasswordInput";
import axios from "axios";

function UserLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isUserIdEmpty, setIsUserIdEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    axios
      .get(`http://localhost:3002/Credentials?user_id=${userId}`)
      .then((response) => {
        const credentials = response.data;
        if (credentials.length > 0) {
          const matchingCredentials = credentials.find((cred: any) => cred.password === password);
          if (matchingCredentials) {
            // Redirect to Details page
            window.location.href = "../Details";
          } else {
            setIsError(true);
          }
        } else {
          setIsError(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  useEffect(() => {
    setIsUserIdEmpty(userId === "");
  }, [userId]);

  useEffect(() => {
    setIsPasswordEmpty(password === "");
  }, [password]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="py-5">Login Now!</h2>
        <div className="container py-4">
          <SingleInput
            text="User ID"
            placeholder=" "
            handleInput={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div className="container py-4">
          <PasswordInput
            text="Password?"
            placeholder=" "
            handleInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <a href="/ForgotPwd" className="py-5">
            Forgot password?
          </a>
        </div>
      </div>
      {isError && <p>Invalid user ID or password. Please try again.</p>}
      <div className="button-container">
        <ButtonGroup
          text="Login"
          link="#"
          disabled={isUserIdEmpty || isPasswordEmpty}
          onSubmit={handleLogin}
        ></ButtonGroup>
        <ButtonGroup
          text="Back"
          link="../"
          disabled={false}
          onSubmit={() => {}}
        ></ButtonGroup>
      </div>
    </>
  );
}

export default UserLogin;
