import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

export const SummaryForm = ({setOrderPhase}) => {
   const [ checked , setChecked ] = useState(false);
   const popover = <Popover> No ice cream will actually be delivered </Popover>;

   const checkboxLabel = <span>I agree to 
                         <OverlayTrigger overlay={popover} placement="right"><span style={{color:'blue'}}> Terms and Conditions </span>
                         </OverlayTrigger></span>
    const handleSubmit = (e) =>{
      e.preventDefault();
      setOrderPhase("completed")
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check type="checkbox" checked= {checked} label={checkboxLabel} onChange={(e) => setChecked(e.target.checked)}></Form.Check>
      </Form.Group >
        <Button disabled={!checked} type="submit" >Confirm order</Button>
    </Form>
  )
}