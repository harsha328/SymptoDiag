import { useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
interface Props {
  state: any;
  setState: (userid: any,username:any) => void;
}

function Register({ setState }: Props) {
  const [userId, setUserId] = useState("");
  const [userName,setUserName]=useState("");


  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="py-3">Register Here </h2>
        <div className="container py-3">
        <SingleInput
          text="Name"
          
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
        />
        </div>
        <div className="container py-3">
        <SingleInput
          text="Email id"
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
         </div>
        <div className="container py-3">
        <SingleInput
          text="Mobile no"
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
         </div>
        <div className="container py-3">
        <SingleInput
          text="User Id"
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
         </div>
        <div className="container py-3">
        <SingleInput
          text="Password"
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
         </div>
        <div className="container py-3">
        <SingleInput
          text="Confirm password"
          placeholder=" "
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
          
        />
        
        </div>

      </div>
      <ButtonGroup
        text="SUBMIT"
        link="../UserLogin"
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
      <ButtonGroup
        text="BACK"
        link="../HomePage"
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

export default Register;