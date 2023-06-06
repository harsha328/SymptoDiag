import { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";


import background from "../assets/background.jpeg"
import bg from "../assets/bg.jpg"
import ModalDisclaimer from "../components/Modal";

interface Props {
  state: any;
  setState: (userid: any, username: any) => void;
}

function HomePage({ setState }: Props) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <>
      <ModalDisclaimer />

      <div
        className="vh-100  "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div className="vh-100"style={{backgroundColor:'rgba(200,200,200,0.4)', }}>



        <div className="container text-center">
          <h1 className="py-5" style={{ fontSize: "50px", marginLeft: "5%", fontStyle: "revert" , fontWeight: "bold"}}> SYMPTODIAG </h1>
          <div className="container py-4"></div>
        </div>
        <div className="container  bg-secondary-subtle">
          <div className="row px-5 ">
            <div className="col-md"></div>
            <div className="col-md d-flex flex-column justify-content-center align-items-center ">
              <div className="container text-center ">
                <ButtonGroup
                
                  text="Login"
                  link="../UserLogin"
                  disabled={false}
                  onSubmit={() => {
                    const id = uid(userName);
                    console.log(id);
                    setUserId(id);
                    setState(userId, userName);
                  }}
                ></ButtonGroup>
                <ButtonGroup
                  text="Register"
                  link="../Register"
                  disabled={false}
                  onSubmit={() => {
                    const id = uid(userName);
                    console.log(id);
                    setUserId(id);
                    setState(userId, userName);
                  }}
                ></ButtonGroup>
                <a href="/About" style={{ marginLeft: "35%"}} className="py-5">
                  ?About us
                </a>
              </div>
            </div>
            <div className="col-md ">
              <img src={bg} alt="bg" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
                    </div>
      </div>
    </>
  );
}

export default HomePage;