import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import DoubleButton from "../components/DoubleButton";
import ButtonGroup from "../components/ButtonGroup";
import { useState,useEffect} from "react";

interface Props {
  state: any;
  setState: (age: any , gender:any ) => void;
}

function Details({  setState }: Props) {
  const [radioState, setRadioState] = useState("male");

  const [inputState, setInputState] = useState("oo");
  useEffect(()=>{
    console.log(inputState)

  },[inputState])

  const checkAgeEntered=()=>{
    return !(parseInt(inputState)>=1 && parseInt(inputState)<=1000)
  }
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="container ">
          <h2 className="py-5"> Welcome </h2>
          <SingleInput
            text="Age"
            placeholder=""
            handleInput={(e) => {
              setInputState(e.target.value);
            }}
          />
        </div>
        <div className="container">
          <h4 className="pt-5">Sex:</h4>
          <DoubleButton
            text1="Male"
            text2="Female"
            handleOptionClick={(e) => {
              setRadioState(e.target.value);
            }}
          ></DoubleButton>
        </div>
        <ButtonGroup
          text="CONTINUE"
          link="../symptoms"
          disabled={checkAgeEntered()}
          onSubmit={() => {
            setState( inputState,  radioState );
          }}
        ></ButtonGroup>
        <ButtonGroup
          text="BACK"
          link="/"
          disabled={false}
          onSubmit={() => {
            setState('','');
          }}
        ></ButtonGroup>
      </div>
    </>
  );
}

export default Details;
