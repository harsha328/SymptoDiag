import NavBar from "../components/NavBar";
import { Accordion } from "react-bootstrap";
import {useState,useEffect} from 'react';
import ButtonGroup from "../components/ButtonGroup";
import axios from "axios";
interface ResultText{
    about:string;
    tests:string;
    remedies:string;
}
interface Props{
    result:ResultText;
}


function Result({result}:Props) {

  const [resultText,setResultText] =useState({
    about:"___________",
    tests:"____________",
    remedies:"___________"

  })
  useEffect(()=>{
    setResultText(result)

  },[resultText])

  
  return (
    <>
      <NavBar />
      <div className="container">
        <Accordion className="my-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>{resultText.about}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tests Possible</Accordion.Header>
            <Accordion.Body>{resultText.tests}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Your Remedies</Accordion.Header>
            <Accordion.Body>{resultText.remedies}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
     
      <ButtonGroup
          text="back"
          link="../Diseases"
          onSubmit={() => {
            () => {
              useState([]);
            };
          }}
        ></ButtonGroup>
      </div>
    </>
  );
}

export default Result;
