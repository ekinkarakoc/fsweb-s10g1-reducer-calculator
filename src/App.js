import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryClear,
  memoryRecall,
} from "./actions";
import reducer from "./reducers";
import { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (e) => {
    const { value } = e.target;
    const numberValue = Number(value);
    dispatch(applyNumber(numberValue));
  };

  const handleOperatorChange = (e) => {
    dispatch(changeOperation(e.target.value));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };

  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.display} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAdd} />
              <CalcButton value={"MR"} onClick={handleMemoryRecall} />
              <CalcButton value={"MC"} onClick={handleMemoryClear} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={clickHandler} />
              <CalcButton value={2} onClick={clickHandler} />
              <CalcButton value={3} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={clickHandler} />
              <CalcButton value={5} onClick={clickHandler} />
              <CalcButton value={6} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={clickHandler} />
              <CalcButton value={8} onClick={clickHandler} />
              <CalcButton value={9} onClick={clickHandler} />
            </div>
            <div className="row ">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
              <CalcButton value={0} onClick={clickHandler} />
              <CalcButton value={"="} onClick={handleOperatorChange} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperatorChange} />
              <CalcButton value={"*"} onClick={handleOperatorChange} />
              <CalcButton value={"-"} onClick={handleOperatorChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
