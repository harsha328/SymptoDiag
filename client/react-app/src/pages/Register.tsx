import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import PasswordInput from "../components/PasswordInput";
import ButtonGroup from "../components/ButtonGroup";
import axios from "axios";
interface Credetials {
  name: string;
  mobile: string;
  user_id: string;
  password: string;
  confirm_pwd: string;
}

function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [credState,setCredState]=useState(false);
  const [credentials, setCredetials] = useState<Credetials>({
    name: "",
    mobile: "",
    user_id: "",
    password: "",
    confirm_pwd: "",
  });

  const handleRegister = () => {
    setCredetials({
      name: name,
      mobile: mobile,
      user_id: userId,
      password: password,
      confirm_pwd: confirmPassword,
    });
  };
  useEffect(()=>{
    console.log(credentials)
    if(userId.length>0){

      axios.post('http://localhost:3002/Credentials',credentials).then((response)=>{
        console.log(response.data)
        if(!response.data.error){
          setCredState(true)
        }
      })
    }
  },[credentials])

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="py-3">Register Here </h2>
        <div className="container py-1">
          <SingleInput
            text="Name"
            placeholder=" "
            handleInput={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="container py-3"></div>
        <div className="container py-3">
          <SingleInput
            text="Mobile no"
            placeholder=" "
            handleInput={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className="container py-3">
          <SingleInput
            text="User Id"
            placeholder=" "
            handleInput={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div className="container py-3">
          <PasswordInput
            text="Password"
            placeholder=" "
            handleInput={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="container py-3">
          <PasswordInput
            text="Confirm password"
            placeholder=" "
            handleInput={(e) => {
              setConfirmPassword(e.target.value);
              
            }}
          />
        </div>
      </div>
      <ButtonGroup
        text="Submit"
        link="../Register"
        disabled={password!=confirmPassword}
        onSubmit={() => {
          handleRegister();
          
        }}
      ></ButtonGroup>
      <ButtonGroup
        text="Back"
        link="../"
        disabled={false}
        onSubmit={() => {
          
        }}
      ></ButtonGroup>
    </>
  );
}

export default Register;
