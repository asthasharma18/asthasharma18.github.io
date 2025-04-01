import { useEffect, useState } from "react";
import axios from 'axios';
import {ScoopOptions}  from "./ScoopOptions";
import { Row } from "react-bootstrap";
import { ToppingsOptions } from "./ToppingsOptions";
import { AlertBanner } from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { formatCurrency } from "../../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";

    export const Options = ({optionType}) => {
        const [items, setItems] = useState([]);
        const [isError, setIsError] = useState(false);
        const { totals } = useOrderDetails();
        useEffect(() => {
          axios
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => {
              console.log('response', response.data);
              setItems(response.data)})
            .catch((err) => setIsError(true))

        },[optionType]);
        
        const ItemComponent = optionType === 'scoops'? ScoopOptions : ToppingsOptions;
        const optionsItem = items.map((item) => <ItemComponent key={item.name} name= {item.name} imagePath ={item.imagePath}/>)
        const title = optionType ? optionType[0].toString().toUpperCase() + optionType.toString().slice(1).toLowerCase(): '';
          console.log('error', isError);  
        return  <>
          <h2>{title}</h2>
          <p>{`${pricePerItem[optionType]} each`}</p>
          <p>{`${title} total: ${formatCurrency(totals[optionType])}`}</p>
          { isError && <AlertBanner/>}
          <Row>{optionsItem}</Row>
        </>
            
    }