import NavBar from "../components/NavBar";
import { useState } from "react";
import TextInput from "../components/TextInput";

/*interface Props {
    state: any;
    setState: (id: any ) => void;
  }*/

function LoginNow() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="container">
          <h2 className="py-5">Login Now!</h2>
          <div className="container py-4">
          <TextInput
          placeholder ="Enter your id"
          />
          </div>
          <div className="container py-4">
          <TextInput
          placeholder ="Enter your password"
          />
</div>
        </div>
      </div>
    </>
  );
};

export default LoginNow;

    