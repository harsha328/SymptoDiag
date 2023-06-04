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
    //result:string[][];
    disease:string;
}


function Result({disease}:Props) {
  const [resultState,setResultState]= useState<string[]>([])
  const [testDescription,setTestDescription]=useState<string>(" ")
  
  useEffect(() => {
    axios.get("http://localhost:3002/diseases").then((response) => {
        const data=response.data;
        const resultObject: string[]=[]
        data.forEach((val: any)=>{
          if(val.disease_name==disease){

            resultObject.push(val.description,val.tests,val.remedies)
            // console.log(resultState)

          }
        })
        // console.log(resultObject,"cehck ")

        setResultState(resultObject)
      })
    }
  , [] );

  useEffect(() => {
    axios.get("http://localhost:3002/test_description").then((response) => {
      // console.log(resultState)
        const data=response.data;
      // console.log(data,"here")
        const tests=resultState[1].split(',')
       // console.log(tests)
       let test_descs=" "
        data.forEach((val:any)=>{
          console.log()
          if(tests.includes(val.test_id)){
            console.log(val.test_description) 
            test_descs=test_descs+`\n`+val.test_description;
          
          }
        })
        console.log(test_descs)
        setTestDescription(test_descs)

      })
      console.log(testDescription,"hi")
    }
  , [resultState] );
  return (
    <>
      <NavBar />
      <div className="container">
        <Accordion className="my-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>{resultState[0]}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tests Possible</Accordion.Header>
            <Accordion.Body>{resultState[1]}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>test description</Accordion.Header>
            <Accordion.Body>{testDescription}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Your Remedies</Accordion.Header>
            <Accordion.Body>{resultState[2]}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
     
      <ButtonGroup
          text="back"
          link="../Diseases"
          disabled={false}
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