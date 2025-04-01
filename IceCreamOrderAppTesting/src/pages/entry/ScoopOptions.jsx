import { Col, Form, Row } from "react-bootstrap"
import { useOrderDetails } from "../../contexts/OrderDetails";

export const ScoopOptions = ({name, imagePath}) => {
    const { updateOrderDeatils } = useOrderDetails();
    const handleChange = (e) => updateOrderDeatils(name, parseInt(e.target.value), "scoops")
    return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: 'center'}}>
        <img src = {`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} style={{width:'75%'}}/>
        <Form.Group controlId={`${name}-count`} as={Row} style={{marginTop:'10px'}}> 
            <Form.Label xs='6' style={{ textAlign: 'right'}}>
              {name}
            </Form.Label>
            <Col xs="5" style={{ textAlign: 'left'}} >
            <Form.Control type="number" defaultValue={0} onChange={handleChange}/>
            </Col>
        </Form.Group>
    </Col>);
}