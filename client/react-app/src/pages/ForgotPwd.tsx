import { useState } from "react";
import NavBar from "../components/NavBar";

import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
interface Props {
  state: any;
  setState: (userid: any,username:any) => void;
}

function ForgotPwd({ setState }: Props) {
  const [userId, setUserId] = useState("");
  const [userName,setUserName]=useState("");


  return (
    <>
      <NavBar />
      <h3>Contact your administrator</h3>
      <ButtonGroup
        text="Back"
        link="../UserLogin"
        disabled={false}
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

export default ForgotPwd;