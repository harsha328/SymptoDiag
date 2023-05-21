import NavBar from "../components/NavBar";
import { Accordion } from "react-bootstrap";
import {useState,useEffect} from 'react';
import ButtonGroup from "../components/ButtonGroup";
import axios from "axios"
// interface ResultText{
//     about:string;
//     tests:string;
//     remedies:string;
// }
interface Props{
    result:string[][];
    disease:string;
}


function Result({result,disease}:Props) {
  const [resultState,setResultState]= useState<string[][]>([])


  const [resultText,setResultText] =useState<string[][]>([])
  useEffect(()=>{
    setResultText(result)

  },[resultText])

  useEffect(() => {
    axios.get("http://localhost:3002/diseases").then((response) => {
        const data=response.data;
        const resultObject: string[][]=[]
        data.forEach((val: any)=>{
          if(val.disease_name==disease){

            resultObject.push([val.disease_name,val.tests,val.remedies])
            console.log(resultState)

          }
        })
        setResultState(resultObject)
      })
    }
  , [] );
  return (
    <>
      <NavBar />
      <div className="container">
        <Accordion className="my-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>{resultText[0]}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tests Possible</Accordion.Header>
            <Accordion.Body>{resultText[1]}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Your Remedies</Accordion.Header>
            <Accordion.Body>{resultText[2]}</Accordion.Body>
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
