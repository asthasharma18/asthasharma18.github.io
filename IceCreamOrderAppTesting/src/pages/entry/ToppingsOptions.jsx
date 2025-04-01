import { Col, Form } from "react-bootstrap"
import { useOrderDetails } from "../../contexts/OrderDetails"


export const ToppingsOptions = ({name, imagePath}) =>{
    const { updateItemCount } = useOrderDetails();
    const handleChange = (e) => {
        updateItemCount(name, e.target.checked ? 1:0, "toppings")
    };
    
    return (
        <Col xs={6} sm={4} md={3} lg={2} style={{ textAlign: 'center'}}> 
        <img src = {`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} style={{width:'75%'}}></img>
        <Form.Group controlId={`${name}-topping-chekcbox`}>
          <Form.Check type="checkbox" label={name} onChange={handleChange}/>
        </Form.Group>
        </Col>
    )
}