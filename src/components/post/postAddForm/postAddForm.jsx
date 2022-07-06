//버튼을 누르면 post를 add 할 수 있는 폼이 만들어짐.
//모달창으로 만들거임
import React, { useRef, useState } from "react";
import style from "./postAddForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";

const PostAddForm = ({ postit, setPostit, addPost }) => {
  const [word, setWord] = useState();
  const [coor, setCoor] = useState();
  // const [post, setPost] = useState([
  //   { id: 1, x: 10, y: 10, content: "goggle" },
  // ]);
  const inputRef = useRef();
  const wrapperRef = useRef();
  const closeModal = () => {
    setPostit(false);
    wrapperRef.current.style.display = "none";
  };
  const inputHandler = () => {
    setWord(inputRef.current.value);
  };
  const addViewPost = () => {
    setPostit(false);
    setCoor(true);
    // 버튼을 누르면 포스트가 추가된다.
    //포스트의 위치를 결정하는 x,y좌표와 내용이 필요하다.
    //state에 저장되는 포스트는 x,y좌표를 포함하고 있어야 한다.
    //containerRef.current.style.opacity = 0;
    //마우스가 움직일때 마다 x, y를 감지하고 클릭하면 해당 x,y를 저장한다.
    //setPost({...post}, {id : new Date(), })
  };
  const coordination = (e) => {
    console.log(e);
    addPost(word, e.clientX * 0.9, e.clientY * 0.7);
    setCoor(false);
  };

  return (
    <>
      {coor && <div className={style.coor} onClick={coordination}></div>}
      {postit && (
        <div className={style.wrapper} ref={wrapperRef}>
          <div className={style.container}>
            <div className={style.header}>
              <h2>ADD POST</h2>
              <FontAwesomeIcon
                icon={faClose}
                className={style.close}
                onClick={closeModal}
              />
            </div>
            <div className={style.content}>
              <form>
                <input
                  ref={inputRef}
                  className={style.input}
                  type={"text"}
                  placeholder={"Type here"}
                  maxLength={30}
                  onChange={inputHandler}
                ></input>
              </form>
              <FontAwesomeIcon
                icon={faPlus}
                className={style.plus}
                onClick={addViewPost}
              />
            </div>
            <span className={style.showtype}>{word}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default PostAddForm;
