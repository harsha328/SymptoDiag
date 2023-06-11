import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import axios from "axios";
import PasswordInput from "../components/PasswordInput";


function UserLogin() {
  const [userId, setUserId] = useState("");
  const [password,setPassword]=useState("");
  const [idList,setIdList]=useState<string[][]>([[]]);
  const [dbUserId,setDbUserId]=useState("");
  const [dbPassword,setDbPassword]=useState("");
  
  useEffect(()=>{
    axios.get("http://localhost:3002/Credentials").then((respose)=>{
      const data=respose.data;
      let idlistarr:string[][]=[]
      data.forEach((val:any)=>{
          idlistarr.push([val.user_id,val.password])
        
      });
      setIdList(idlistarr);
      console.log(idList)
    })

  },[])
  const handleLogin=():boolean=>{
    idList.forEach((val:any)=>{
      if(userId==val[0] && password==val[1]){
        return false
      }
      
    })
    return false
  }

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
            setUserId(e.target.value);
          }}
        />
        </div>
        <div className="container py-4">
        <PasswordInput
          text="Password?"
          placeholder=" "
          handleInput={(e) => {
            setPassword(e.target.value);
          }}
          
        />
        <a href="/ForgotPwd" className="py-5">Forgot password?</a>

        </div>

      </div>
      <div className="button-container">
      <ButtonGroup
        text="Login"
        link="../Details"
        disabled={ handleLogin()}
        onSubmit={() => {
        }}
      ></ButtonGroup>
      <ButtonGroup
        text="Back"
        link="../ "
        disabled={false}
        onSubmit={() => {
        }}
      ></ButtonGroup>
      </div>
      
    </>
  );
}

export default UserLogin;
  // if(val.user_id==userId && val.password==password){
          //     console.log(userId,password)
          //     setDbUserId(val.user_id);
          //     setDbPassword(val.password);
          //   }