import React from "react";
import {add,sub,div,multi} from "./Calc";
import './index.css'
function ListAdd() {
  return  (
      
    <ul>
    <h1>Calculator</h1>
      <li>Add of these number : {add(20,30)}</li>
      <li>Sub of these number : {sub(20,10)}</li>
      <li>Multiply of these number : {multi(20,10)}</li>
      <li>Divison of these number : {div(20,30)}</li>
    </ul>
  );
}
export default ListAdd;
