// 포스트잇 역할을 하는 컴포넌트
// 포스트가 만들어지면 state에서 상태를 업데이트 받아 포스트잇을 만든다.
import React, { useState } from "react";
import style from "./postForm.module.css";
const PostForm = ({ view }) => {
  const [posts, setPosts] = useState([
    { id: 1, x: 50, y: 30, contents: "goggle" },
    { id: 2, x: 250, y: 30, contents: "naver" },
  ]);

  return (
    <>
      {view && (
        <div className={style.container}>
          {posts.map((e) => (
            <div
              className={style.post}
              style={{ top: `${e.x}px`, left: `${e.y}px` }}
              key={e.id}
            >
              <div className={style.title}>{e.contents}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostForm;
