import { Link } from "react-router-dom";

interface Props{
    Diseasename: string;
    Strenth: string;
    link: string;

}
function ResultCard({Diseasename,Strenth,link= "#"}:Props)

{
    return(
        <div className="card text-center">
  <div className="card-header">
    
  </div>
  <div className="card-body">
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
  <div className="card-footer text-body-secondary">
  </div>
</div>
    )
}
export default ResultCard;