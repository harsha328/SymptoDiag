import { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
import { Modal } from "react-bootstrap";
import ModalDisclaimer from "../components/Modal";
interface Props {
  state: any;
  setState: (userid: any,username:any) => void;
}

function HomePage({ setState }: Props) {
  const [userId, setUserId] = useState("");
  const [userName,setUserName]=useState("");


  return (
    <>
    <ModalDisclaimer/>

     
      <div className="container text-center">
        <h1 className="py-5"> SYMPTODIAG </h1>
        <div className="container py-4">
        </div>
       
        
      </div>
      <div className="container text-center">
      <ButtonGroup
        text="Login"
        link="../UserLogin"
        disabled={false}
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
      <ButtonGroup
        text="Register"
        link="../Register"
        disabled={false}
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
      <a href="/About" className="py-5">?About us</a>
      </div>
    </>
  );
}

export default HomePage;
