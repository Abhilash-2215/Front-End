//for counter app
//three buttons 
// 1.+
// 2.-
// 3.reset
//with one component we need to do 
//display function
//react does not track normal variables
//hooks always start with use



import { useState } from "react";

function Button({ sym, onClick }) {
  return <button onClick={onClick}>{sym}</button>;
}

function Display({ current_num }) {
  return <h1>{current_num}</h1>;
}

function App() {
  const [current_num, setCurrentNum] = useState(0);

  function handleIncrement() {
    setCurrentNum(current_num + 1);
    console.log(current_num + 1);
  }

  function handleDecrement() {
    setCurrentNum(current_num - 1);
    console.log(current_num - 1);
  }

  function handleReset() {
    setCurrentNum(0);
    console.log(0);
  }

  return (
    <div>
      <Display current_num={current_num} />
      <Button sym="+" onClick={handleIncrement} />
      <Button sym="reset" onClick={handleReset} />
      <Button sym="-" onClick={handleDecrement} />
    </div>
  );
}

export default App;
