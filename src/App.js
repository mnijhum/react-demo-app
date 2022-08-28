import { useState } from "react";
import "./App.css";

function App() {
  const [count, SetCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#282C34",
        height: "100vh",
      }}
    >
      <button
        onClick={() => {
          SetCount(count - 1);
        }}
        className="button buttonred"
        style={{ marginRight: "2rem" }}
        disabled={count === 0}
      >
        -1
      </button>
      <span className="numberDisplay">{count}</span>
      <button
        onClick={() => {
          SetCount(count + 1);
        }}
        className="button"
        style={{ marginLeft: "2rem" }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
