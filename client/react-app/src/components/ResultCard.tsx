import { Link } from "react-router-dom";

interface Props{
    Diseasename: string;
    Strenth: string;
    link: string;

}
function ResultCard({Diseasename,Strenth,link= "#"}:Props)

{
    return(
        <div className="card text-center  mt-5" >
 
  <div className="card-body diseasecard">
    <h5 className="card-title">{Diseasename}</h5>
    <p className="card-text">{Strenth}</p>

    <Link to={link} className="btn-link-white w-100">
          {
            <button className="btn btn-primary" type="submit" >
              Next
            </button>
          }
        </Link>


  </div>
  
</div>
    )
}
export default ResultCard;