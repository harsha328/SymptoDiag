import NavBar from "../components/NavBar";
import ResultCard from "../components/ResultCard";

interface Props{
    disease1:string;
    disease2:string;
}

function Diseases({disease1,disease2}:Props)
{
    return(
    <>
    <NavBar />
    <ResultCard Diseasename={disease1} Strenth="strong" link="#"/>
    <ResultCard Diseasename={disease2} Strenth="moderate" link="#"/>

    
    </>  
    )
}
export default Diseases;