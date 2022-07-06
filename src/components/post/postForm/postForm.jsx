// 포스트잇 역할을 하는 컴포넌트
// 포스트가 만들어지면 state에서 상태를 업데이트 받아 포스트잇을 만든다.
import React from "react";
import style from "./postForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const PostForm = ({ view, posts, removePost }) => {
  const removeHandlerPost = (id) => {
    removePost(id);
  };
  return (
    <>
      {view && (
        <div className={style.container}>
          {posts.map((e) => (
            <div
              className={style.post}
              style={{ top: `${e.y}px`, left: `${e.x}px` }}
              key={e.id}
            >
              <FontAwesomeIcon
                icon={faClose}
                className={style.close}
                name={e.id}
                onClick={() => removeHandlerPost(e.id)}
              />
              <div className={style.title}>{e.contents}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostForm;
