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
        <h3 className="py-5"> About Us </h3>
        <div className="container py-4">
          <p>Welcome to SymptoDiag!</p>
          <p> Our goal is to provide you with a simple and user-friendly tool to help you understand the possibility of certain diseases based on your symptoms. Here's what you need to know about us:
             </p>
             <h5>How it works</h5>
             <p>Using our symptom checker is easy! Just select the symptoms you are experiencing from our list,we analyze the data to estimate the likelihood of specific diseases. Remember, these results are not a final diagnosis but can give you an idea of what you might be facing.</p>
             <h5>Your Health Matters !</h5>
             <p>Your health is our top priority, and we want to empower you to make informed decisions. Please use our symptom checker responsibly and remember that it's just a starting point. If you have any concerns or questions about your health, please seek the guidance of a healthcare professional.</p>

             <h5>Contact Us</h5>
             <p>We value your feedback and are here to help. If you have any questions, suggestions, or need assistance, please feel free to contact our team using the information below:</p>
             <p>Email:<a>support@symptodiag.com</a></p>
             
             <p>Phone: 8304095752</p>
        </div>
       
       
      </div>
      <ButtonGroup
        text="Back"
        link="../HomePage"
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