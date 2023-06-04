import { useState } from "react";
import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import ButtonGroup from "../components/ButtonGroup";
import { uid } from "react-uid";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import bgimg from '../assets/bgimg.jpg'
interface Props {
  state: any;
  setState: (userid: any,username:any) => void;
}

function UserLogin({ setState }: Props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);




  const [userId, setUserId] = useState("");
  const [userName,setUserName]=useState("");


  return (
    <>
      <NavBar />

      

      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>



      <div className="container" style={{ backgroundImage: `url(${bgimg})` }}>
      
        <h2 className="py-5"> enter username </h2>
        <SingleInput
          text="User Name"
          
          placeholder="Ex. john..."
          handleInput={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <ButtonGroup
        text="continue"
        link="../Details"
        disabled={false}
        onSubmit={() => {
            const id=uid(userName);
            console.log(id)
            setUserId(id)
          setState(userId,userName);
        }}
      ></ButtonGroup>
    </>
  );
}

export default UserLogin;
