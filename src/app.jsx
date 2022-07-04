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
import Proposition from "./components/contents/proposition/proposition";
import RelationShip from "./components/contents/relatinsship/relationship";
import Channel from "./components/contents/channel/channel";
import Segments from "./components/contents/segments/segments";
import Structure from "./components/contents/structure/structure";
import Revenue from "./components/contents/revenue/revenue";

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
        <Route path="/proposition" element={<Proposition cld={cld} />} />
        <Route path="/relationships" element={<RelationShip cld={cld} />} />
        <Route path="/channel" element={<Channel cld={cld} />} />
        <Route path="/segments" element={<Segments cld={cld} />} />
        <Route path="/structure" element={<Structure cld={cld} />} />
        <Route path="/revenue" element={<Revenue cld={cld} />} />
      </Routes>
    </>
  );
}

export default App;
