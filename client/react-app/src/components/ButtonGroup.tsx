import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
  onSubmit:()=>void;
}

function ButtonGroup({ text, link = "#" ,onSubmit}: Props) {
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <Link to={link} className="btn-link-white w-100">
          {
            <button className="btn btn-primary" type="submit" onClick={onSubmit}>
              {text}
            </button>
          }
        </Link>
      </div>
     
    </>
  );
}
export default ButtonGroup;
