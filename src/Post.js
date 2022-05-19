import React, { useEffect, useState } from 'react';
import './Post.css';

function Post({ data, selectedTag, user }) {
  return (
    <div className="Post">
      <div className="userTag">
        <img src={user[0].img} className="userPic" />
        <div className="userInf">
          <div className="userName">{user[0].name}</div>
          <div className="userField">{user[0].field}</div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}

function Posts({ data, selectedTag, user }) {
  let pl = [];
  if (selectedTag.length === 0) {
    for (let i = 0; i < data.length; i++) {
      pl.push(<img key={data[i].img} src={data[i].img} alt="dog" />);
    }
  } else {
    for (let i = 0; i < selectedTag.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (selectedTag[i] == data[j].tag) {
          pl.push(<img key={data[j].img} src={data[j].img} alt="dog" />);
        }
      }
    }
  }
  return <div>{pl}</div>;
}

export default Posts;
