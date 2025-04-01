import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers.functions";

const App = () =>{
  const [ color, setColor ] = useState('medium-violet-red');
  const nextColor = color === 'medium-violet-red'? 'midnight-blue': 'medium-violet-red';
  const nextColorTitleCase = kebabCaseToTitleCase(nextColor);
  const [ isChecked, setIsChecked ] = useState(false);

  return (<>
    <button className={color} onClick={()=> setColor(nextColor)} disabled={isChecked}>change color to {nextColorTitleCase} </button>
    <br/>
    <input type="checkbox" className="checkbox" defaultChecked={false} id="disable-button-checkbox" 
     onClick={(e)=> {
      setIsChecked(e.target.checked);
     }} 
    />
    <label htmlFor="disable-button-checkbox">disable button</label>

    </>
  );
}

export default App;
