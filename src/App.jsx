import React from "react";
import { useState } from "react";
import "./App.css";
import Split from "./components/Split";
import { LoadingScreen } from "./section/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-800 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }bg-black text-gray-100`}
      >
        <Split />
      </div>
    </>
  );
}

export default App;
