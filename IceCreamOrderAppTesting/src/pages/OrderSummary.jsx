import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../contexts/OrderDetails"
import { SummaryForm } from "./SummaryForm"

export const OrderSummary = () => {
    const  { totals, optionCounts } = useOrderDetails();

    const scoopArray = Object.entries(optionCounts.scoops);
    const scoopList = scoopArray.map(([key, value]) => (
      <li key={key}>
        {value} {key}
      </li>
    ));
  
    const toppingsArray = Object.keys(optionCounts.toppings);
    const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);

 return <>
   <h1>Order Summary</h1>
   <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
     <ul>{scoopList}</ul>
   <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
     <ul>{toppingList}</ul>
   <SummaryForm></SummaryForm>
 </>
}