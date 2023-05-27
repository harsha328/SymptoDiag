import { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
import NavBar from "../components/NavBar";
interface Props {
  state: any;
  setState: (userid: any,username:any) => void;
}

function About({ setState }: Props) {
  const [userId, setUserId] = useState("");
  const [userName,setUserName]=useState("");


  return (
    <>
    <NavBar/>
     
      <div className="container">
        <h1 className="py-5"> About Us </h1>
        <div className="container py-4">
        </div>
       
       
      </div>
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

export default About;