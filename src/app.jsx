import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import "./app.css";
import Activities from "./components/contents/activities/activities";
import Partner from "./components/contents/partner/partner";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Model from "./components/model/model";
import Resource from "./components/contents/resource/resource";

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "individualdevelpment",
    },
  });
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
              <Home view={view} handlerView={handlerView} cld={cld} />
              <div className={view === true ? "visibleModel" : "hiddenModel"}>
                <Model view={view} cld={cld} />
              </div>
            </>
          }
        />
        <Route path="/partner" element={<Partner cld={cld} />} />
        <Route path="/activities" element={<Activities cld={cld} />} />
        <Route path="/resources" element={<Resource cld={cld} />} />
      </Routes>
    </>
  );
}

export default App;
