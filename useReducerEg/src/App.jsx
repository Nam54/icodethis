import { useReducer } from "react";
import "./App.css";

function App() {
  const UP_ACTION = "up";
  const DOWN_ACTION = "down";

  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        throw new Error("Invalid action");
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>{count}</div>

      <div>
        <button onClick={() => dispatch(UP_ACTION)}>UP</button>

        <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
      </div>
    </>
  );
}

export default App;
