import { useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
import PasswordInput from "../components/PasswordInput";
interface Props {
  state: any;
  setState: (userid: any,username:any) => void;
}

function UserLogin({ setState }: Props) {
  const [userId, setUserId] = useState("");
  const [userName,setUserName]=useState("");


  return (
    <>
      <NavBar />
      
      <div className="container">
        <h2 className="py-5" > Login Now! </h2>
        <div className="container py-4">
        <SingleInput
          text="Enter your id"
          
          placeholder="Ex. john"
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
        />
        </div>
        <div className="container py-4">
        <PasswordInput
          text="Password?"
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
        <a href="/ForgotPwd" className="py-5">Forgot password?</a>

        </div>

      </div>
      <div className="button-container">
      <ButtonGroup
        text="Login"
        link="../Details"
        disabled={false}
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
      <ButtonGroup
        text="Back"
        link="../ "
        disabled={false}
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
      </div>
      
    </>
  );
}

export default UserLogin;
