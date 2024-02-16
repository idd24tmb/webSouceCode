import { useState } from "react";
import "./App.css";
import CanvasContainer from "./myModule/CanvasContainer";
import Basic from "./myModule/Basic";
import Bg from "./myModule/Bg";

function App() {
  const [show3D, setShow3D] = useState(false);
  const [selectedObjects, setSelectedObjects] = useState<Array<number>>([]);

  const handleSelectObject = (id: number) => {
    setSelectedObjects((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      if (newSelection.length > 2) newSelection.shift();
      return newSelection;
    });
  };

  return (
    <div>
      <Bg />
      <button
        className={`btn ${show3D ? "active" : ""}`}
        onClick={() => setShow3D(!show3D)}
      ></button>
      {show3D && (
        <CanvasContainer
          selectedObjects={selectedObjects}
          onSelectObject={handleSelectObject}
        />
      )}
      <Basic />
    </div>
  );
}

export default App;
