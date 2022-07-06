import { useEffect, useState } from "react";
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
import PostAddForm from "./components/post/postAddForm/postAddForm";
import PostForm from "./components/post/postForm/postForm";
import LoadSpiner from "./components/loading/loadSpiner";

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "individualdevelpment",
    },
  });
  const [view, setView] = useState(false);
  const [postit, setPostit] = useState(false);
  const [model, setModel] = useState(false);
  const [resize, setResize] = useState(false);
  const [posts, setPosts] = useState([]);

  const handlerView = () => {
    setView(true);
  };
  const handlerResize = () => {
    setResize(true);
  };
  useEffect(() => {
    setModel(view);
  }, [view]);

  useEffect(() => {
    window.addEventListener("resize", handlerResize);
    if (resize) {
      setTimeout(() => {
        setResize(false);
      }, 500);
    }
  }, [resize]);
  const addPost = (content, x, y) => {
    setPosts([
      ...posts,
      { id: posts.length + 1, x: x, y: y, contents: content },
    ]);
  };
  //console.log(posts);
  const removePost = (id) => {
    const post = [...posts];
    setPosts(post.filter((post) => post.id !== id));
  };
  return (
    <>
      <Header view={view} setView={setView} setPostit={setPostit} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home view={view} handlerView={handlerView} cld={cld} />
              <div className={view === true ? "visibleModel" : "hiddenModel"}>
                {resize ? (
                  <LoadSpiner model={model} />
                ) : (
                  <>
                    <Model view={view} cld={cld} />
                    <PostForm
                      removePost={removePost}
                      posts={posts}
                      view={view}
                    />
                    <PostAddForm
                      postit={postit}
                      setPostit={setPostit}
                      addPost={addPost}
                    />
                  </>
                )}
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
