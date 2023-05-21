import { useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
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
        <h2 className="py-5"> Forgot Password! </h2>
        <div className="container py-4">
        <SingleInput
          text="Enter your Mobile number"
          
          placeholder="Ex. john..."
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
        />
        </div>
        <div className="container py-4">
        <SingleInput
          text="Send OTP"
          placeholder="Enter OTP"
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
        
        </div>

      </div>
      <ButtonGroup
        text="submit"
        link="../UserLogin"
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
      <ButtonGroup
        text="back"
        link="../UserLogin"
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
    </>
  );
}

export default UserLogin;