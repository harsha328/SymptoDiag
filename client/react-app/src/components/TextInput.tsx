interface Props {

    placeholder:string;
    
  }
function TextInput({placeholder}:Props)
{
    return(
        <>
        <div className="input-group flex-nowrap">
  <input type="text" className="form-control" placeholder={placeholder} aria-label="Enter your ID" aria-describedby="addon-wrapping"/>
</div>
        </>
    )
}
export default TextInput