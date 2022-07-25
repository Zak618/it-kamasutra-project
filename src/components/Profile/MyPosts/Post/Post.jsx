import React from "react";
import s from'./Post.module.css'

const Post = (props) => {
  return (
      <div className={s.item}>
        <img src="https://litolan.ua/templates/europlast/resource/img/ceo.svg" alt="demo"/>
        { props.message }
        <div>
          <span>like</span> { props.likesCount }
        </div>
        </div>
  );
};

export default Post;
