import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
  disabled:boolean;
  onSubmit:()=>void;
}

function ButtonGroup({ text, link = "#" ,disabled=false,onSubmit}: Props) {
  return (
    <>
      <div className="d-grid gap-2 col-2 mx-auto pt-1" aria-disabled={disabled}>
        <Link to={link} className="btn-link-white w-100"  aria-disabled={disabled} onClick={disabled ? e => e.preventDefault() : undefined}>
          {
            <button className="btn btn-primary" type="submit" onClick={onSubmit} disabled={disabled}
            aria-disabled={disabled}>
              {text}
            </button>
          }
        </Link>
      </div>
     
    </>
  );
}
export default ButtonGroup;
