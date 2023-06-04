
interface Props {
    text: string;
    placeholder:string;
    handleInput:(e:any)=>void
  }
  function PasswordInput({ text,placeholder ,handleInput}: Props) {
    return (
      <div className="input-group input-group-lg d-flex justify-content-center">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          {text}
        </span>
        <input
          type="password"
          className="form-control"
          //style={{ width: '300px' }}
          aria-label="Sizing example input"
          placeholder={placeholder}
          aria-describedby="inputGroup-sizing-lg"
          onChange={handleInput}
        />
      </div>
    );
  }
  
  export default PasswordInput;
  