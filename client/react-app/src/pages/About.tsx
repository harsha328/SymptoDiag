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
        <h3 className="py-3"style={{fontWeight: "bold"}}> About Us </h3>
        <div className="container py-4">
          <p style={{fontSize:"18px"}}>Welcome to SymptoDiag!</p>
          <p style={{fontSize:"18px"}}> Our goal is to provide you with a simple and user-friendly tool to help you understand the possibility of certain diseases based on your symptoms. Here's what you need to know about us:
             </p>
             <h5 style={{fontWeight: "bold"}}>How it works</h5>
             <p style={{fontSize:"18px"}}>Using our symptom checker is easy! Just select the symptoms you are experiencing from our list,we analyze the data to estimate the likelihood of specific diseases. Remember, these results are not a final diagnosis but can give you an idea of what you might be facing.</p>
             <h5 style={{fontWeight: "bold"}} >Your Health Matters !</h5>
             <p style={{fontSize:"18px"}}>Your health is our top priority, and we want to empower you to make informed decisions. Please use our symptom checker responsibly and remember that it's just a starting point. If you have any concerns or questions about your health, please seek the guidance of a healthcare professional.</p>

             <h5 style={{fontWeight: "bold"}}>Contact Us</h5>
             <p style={{fontSize:"18px"}}>We value your feedback and are here to help. If you have any questions, suggestions, or need assistance, please feel free to contact our team using the information below:</p>
             <p style={{fontSize:"18px"}}>Email: <a style={{color:"blue"}}>support@symptodiag.com</a></p>
             
             <p style={{fontSize:"18px"}}>Phone: 8304095752</p>
        </div>
       
       
      </div>
      <ButtonGroup
        text="Back"
        link="../"
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

export default About;