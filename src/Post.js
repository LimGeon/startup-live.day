import React, { useEffect, useState } from 'react';
import './Post.css';

function Post({
  userImg,
  userName,
  dataTime,
  dataImg,
  dataName,
  dataWhich,
  dataForWho,
  dataTag,
}) {
  return (
    <div className="Post">
      <div className="postHead">
        <div className="userTag">
          <img src={userImg} className="userPic" />
          <div className="userInf">
            <div className="userName">
              <span className="by">by </span>
              <a href="#" className="userNameFont">
                <span className="userNameFont">{userName}</span>
              </a>
            </div>
            <div className="userTime">{dataTime}</div>
          </div>
        </div>
        <button className="insertWebina" onClick={(event) => {}}>
          웨비나 참여할래요
        </button>
      </div>
      <div className="PostPic">
        <img key={dataImg} src={dataImg} alt={dataTag} />
      </div>
      <div className="content">
        <div className="contentName">{dataName}</div>
        <div className="contentMain">
          <div className="content_letter">
            <div className="letterHead">어떤 웨비나인가요?</div>
            <ul className="letterContent">
              {dataWhich.map((text) => (
                <li>💡{text}</li>
              ))}
            </ul>
          </div>
          <div className="content_letter">
            <div className="letterHead">이런 분들이 들으면 좋아요</div>
            <ul className="letterContent">
              {dataForWho.map((text) => (
                <li>📌{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts({ selectedTag, user }) {
  let pl = [];
  if (selectedTag.length === 0) {
    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < user[i].data.length; j++) {
        pl.push(
          <Post
            userImg={user[i].img}
            userName={user[i].name}
            dataTime={user[i].data[j].time}
            dataImg={user[i].data[j].img}
            dataTag={user[i].data[j].tag}
            dataName={user[i].data[j].name}
            dataWhich={user[i].data[j].which}
            dataForWho={user[i].data[j].forWho}
          />
        );
      }
    }
  } else {
    for (let i = 0; i < selectedTag.length; i++) {
      for (let j = 0; j < user.length; j++) {
        for (let k = 0; k < user[i].data.length; k++) {
          if (selectedTag[i] == user[j].data[k].tag) {
            pl.push(
              <Post
                userImg={user[i].img}
                userName={user[i].name}
                dataTime={user[i].data[j].time}
                dataImg={user[i].data[j].img}
                dataTag={user[i].data[j].tag}
                dataName={user[i].data[j].name}
                dataWhich={user[i].data[j].which}
                dataForWho={user[i].data[j].forWho}
              />
            );
          }
        }
      }
    }
  }
  return <div className="Posts">{pl}</div>;
}

export default Posts;
