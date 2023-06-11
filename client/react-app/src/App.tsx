import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Symptoms from "./pages/symptoms";
import Details from "./pages/Details";
import Result from "./pages/Result";
import UserLogin from "./pages/UserLogin";
import { useState, useEffect } from "react";
import axios from "axios";
import Diseases from "./pages/Diseases";
import ForgotPwd from "./pages/ForgotPwd";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
interface User {
  userid:string;
  username:string;
  age: string;
  gender: string;
  symptoms: string;
}



function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [disease,setDisease]=useState<string[]>([]);
  

  const [userdata, setUserData] = useState<User>({
    userid:"are",
    username:"",
    age: "",
    gender: "",
    symptoms: '',
  });
  

  const handleUserIdChange=(userid:string,username:string)=>{
    setUserData({...userdata,userid:userid,username:username})
    console.log(userdata,userid,'here')
  }
  const handleAgeGenderChange = (age: string, gender: string) => {
    setUserData({ ...userdata, age: age, gender: gender });
  };

  const handleSymptomsChange = (symptoms: string[]) => {
    setUserData({ ...userdata, symptoms: symptoms.join(' ') });
  };

  useEffect(() => {
    if (
      userdata.age !== "" &&
      userdata.gender !== "" &&
      userdata.symptoms.length > 0
    ) {
      setUsers((currentUsers) => [...currentUsers, userdata]);
      console.log(2)
    }
  }, [userdata]);

  useEffect(() => {
    if(users.length>0){

      axios.post('http://localhost:3002/userdetails',{users})
      console.log({users})
    }
    console.log(users)
  }, [users]);
  const disease1=disease[0];
  const disease2=disease[1];

 
  
  

  return (
    <Router>
      <Routes>
        <Route path="/UserLogin" element={
          <UserLogin />
        
        }/>
        <Route
          path="/Details"
          element={
            <Details state={userdata} setState={handleAgeGenderChange} />
          }
        ></Route>

        <Route
          path="/Symptoms"
          element={
            <Symptoms state={userdata} setState={handleSymptomsChange} setDisease={setDisease} />
          }
        ></Route>
         <Route
          path="/Result1"
          element={
            <Result disease={disease1} />
          }
        ></Route>
        <Route
          path="/Result2"
          element={
            <Result disease={disease2} />
          }
        ></Route>
        <Route
        path="/Diseases"
        element={
         <Diseases disease1={disease1} disease2={disease2}/>
        }
        ></Route>
         <Route
          path="/ForgotPwd"
          element={
            <ForgotPwd state={userdata} setState={handleAgeGenderChange} />
          }
        ></Route>
        <Route
          path="/Register"
          element={
            <Register />
          }
        ></Route>
                <Route
          path="/RegisterPage"
          element={
            <RegisterPage />
          }
        ></Route>
       <Route
          path="/LoginPage"
          element={
            <LoginPage />
          }
        ></Route>
        <Route
          path="/"
          element={
            <HomePage state={userdata} setState={handleAgeGenderChange} />
          }
        ></Route>
        <Route
          path="/About"
          element={
            <About state={userdata} setState={handleAgeGenderChange} />
          }
        ></Route>

      </Routes>
    </Router>
  );
}

export default App;