import NavBar from "../components/NavBar";
import ResultCard from "../components/ResultCard";
import ButtonGroup from "../components/ButtonGroup";
import { useState,useEffect } from "react";

interface Props{
    disease1:string;
    disease2:string;
}

function Diseases({disease1,disease2}:Props)
{
    

    return(
    <>
    <NavBar />
    <div className="container d-flex flex-column ">
    <div className="container">
    <h2 className="py-5">Here are your matching results!</h2>
    </div>
    <ResultCard Diseasename={disease1} Strenth="Strong possibility" link="../Result1"/>
    <ResultCard Diseasename={disease2} Strenth="Moderate possibility" link="../Result2"/>
    <div>
    
    <ButtonGroup
          text="Back"
          link="../symptoms"
          disabled={false}
          onSubmit={() => {
            () => {
              useState([]);
            };
          }}
        ></ButtonGroup>
    </div>

    </div>

    
    </>  
    )
}
export default Diseases;