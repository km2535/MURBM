import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Partner from "./components/contents/partner";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Model from "./components/model/model";

function App() {
  const [view, setView] = useState(false);

  const handlerView = () => {
    setView(true);
  };

  return (
    <>
      <Header view={view} setView={setView} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home view={view} handlerView={handlerView} />
              <div className={view === true ? "visibleModel" : "hiddenModel"}>
                <Model view={view} />
              </div>
            </>
          }
        />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </>
  );
}

export default App;
