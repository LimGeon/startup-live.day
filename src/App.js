import React, { useEffect, useState } from 'react';
import './root.css';
import './App.css';
import './Tag.css';
import './Post.css';
import Posts from './Post.js';
import Tags from './Tag.js';

/* function Post({ data, selectedTag, user }) {
  return (
    <div className="Post">
      <div className="userTag">
        <img src={user[0].img} className="userPic" />
        <div className="userInf">
          <div className="userName">{user[0].name}</div>
          <div className="userField">{user[0].field}</div>
        </div>
      </div>
      <div className="content">
        <img key={data[0].img} src={data[0].img} alt="dog" />
      </div>
    </div>
  );
} */

export default function App() {
  const [tagList, setTagList] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const getTag = (selectedTag) => {
    setSelectedTag(selectedTag);
  };
  const [data, setData] = useState([
    {
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220417_258%2F1650184513321BoHu1_JPEG%2F51320293024461210_729841342.jpg&type=sc960_832',
      tag: 'dog',
    },
    {
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211127_207%2F1637987015405Y9waP_JPEG%2F39122904114070858_937714696.jpg&type=sc960_832',
      tag: 'dog',
    },
    {
      img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTVfMjEg%2FMDAxNjQ5OTkwOTM0NTk0.CRZs-E8NkFymigUo2TENVAlt8C987RD9DoGdTxP9zakg.Fe8dPkYpB0ia5p-du3IMFIwcLxTP8KYvWSqndpDrI3Yg.JPEG.wownd3007%2F20220415_113455.jpg&type=sc960_832',
      tag: 'cat',
    },
  ]);
  for (let i = 0; i < data.length; i++) {
    if (!tagList.includes(data[i].tag)) {
      setTagList([...tagList, data[i].tag]);
    }
  }
  const [user, setUser] = useState([
    {
      img: 'https://lh3.google.com/p/AF1QipOV8L3btjx1hDsMthdPlyh6B5OGaMEhDkqf11Qb=s124-c-U',
      name: 'CLASSUM',
      time: '4월 28일(목) 오후 7시',
    },
    {
      img: 'https://lh3.google.com/p/AF1QipPeBgHu1e5jNhd-trvC8OY7xKG4_6YdZ7LIafbf=s124-c-U',
      name: '장발',
    },
  ]);
  const [content, setcontent] = useState([
    {
      name: '상시 학습이 일어나는 학습 조직 만들기',
      which: [
        '스타트업에서 만난 살아 숨쉬는 학습조직 - 박세헌 | 언픽셀 경영지원총괄 & 기업전략실',
        '카훗과 함꼐 멋진 학습 조직 만들기 - 제임스 미클웨이트 | Kahoot! at work 부사장',
        '상시 학습이 일어나는 조직을 만들 때 피해야 할 3가지 실수 - 이채린 | 클라썸 CEO',
        '질의응답',
      ],
      forWho: [
        '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대포님',
        '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀',
        '4대보험 신고부터 모든 HR업무를 나홀로 하느라 효율적인 방법을 찾고 있는 대표',
      ],
    },
  ]);
  console.log(selectedTag);
  return (
    <div className="App">
      <header className="Header">
        <div className="Logo">
          <img
            className="qwe"
            src="https://stackblitz.com/files/react-rn98a2/github/LimGeon/START_feedUP/main/Logo.png"
            alt="임시?"
          />
        </div>
        <div className="Bar">
          <div>Home</div>
          <div>About</div>
          <div>Open Chat</div>
          <div>Content</div>
        </div>
      </header>
      <nav className="Nav">
        <div className="writing">태그로 원하는 웨비나를 찾을 수 있어요.</div>
        <Tags tagList={tagList} selectedTag={selectedTag} getTag={getTag} />
      </nav>
      <main className="Main">
        <div className="writing">
          당신의 커리어리를 향상시켜줄 웨비나 리스트에요.
        </div>
        <Posts
          data={data}
          selectedTag={selectedTag}
          user={user}
          content={content}
        ></Posts>
      </main>
      <footer className="Footer">
        {/*         <Post data={data} selectedTag={selectedTag} user={user}></Post> */}
      </footer>
    </div>
  );
}
