import React, { useEffect, useState } from 'react';
import './root.css';
import './App.css';
import './Tag.css';
import './Post.css';
import Posts from './Post.js';
import Tags from './Tag.js';
import Logo from './Img/logo.svg';
import bookImg from './Img/bookImg.svg';
import earthImg from './Img/Earth.svg';
import image5 from './Img/image 5.svg';
export default function App() {
  const [tagList, setTagList] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const getTag = (selectedTag) => {
    setSelectedTag(selectedTag);
  };

  const [user, setUser] = useState([
    {
      img: 'https://lh3.google.com/p/AF1QipOV8L3btjx1hDsMthdPlyh6B5OGaMEhDkqf11Qb=s124-c-U',
      name: 'CLASSUM',
      data: [
        {
          tag: '스타트업',
          img: 'https://stackblitz.com/files/react-rn98a2/github/LimGeon/START_feedUP/main/image%205.png',
          time: '4월 28일(목) 오후 7시',
          name: '상시 학습이 일어나는 학습 조직 만들기',
          which: [
            '스타트업에서 만난 살아 숨쉬는 학습조직 - 박세헌 | 언픽셀 경영지원총괄 & 기업전략실',
            '카훗과 함께 멋진 학습 조직 만들기 - 제임스 미클웨이트 | Kahoot! at work 부사장',
            '상시 학습이 일어나는 조직을 만들 때 피해야 할 3가지 실수 - 이채린 | 클라썸 CEO',
            '질의응답',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대포님',
            '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀',
            '4대보험 신고부터 모든 HR업무를 나홀로 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
        {
          tag: '스타트업',
          img: 'https://stackblitz.com/files/react-rn98a2/github/LimGeon/START_feedUP/main/image%205.png',
          time: '4월 28일(목) 오후 7시',
          name: '상시 학습이 일어나는 학습 조직 만들기',
          which: [
            '스타트업에서 만난 살아 숨쉬는 학습조직 - 박세헌 | 언픽셀 경영지원총괄 & 기업전략실',
            '카훗과 함께 멋진 학습 조직 만들기 - 제임스 미클웨이트 | Kahoot! at work 부사장',
            '상시 학습이 일어나는 조직을 만들 때 피해야 할 3가지 실수 - 이채린 | 클라썸 CEO',
            '질의응답',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대포님',
            '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀',
            '4대보험 신고부터 모든 HR업무를 나홀로 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
      ],
    },
    {
      img: 'https://lh3.google.com/p/AF1QipOV8L3btjx1hDsMthdPlyh6B5OGaMEhDkqf11Qb=s124-c-U',
      name: 'flex',
      data: [
        {
          tag: '보험',
          img: 'https://stackblitz.com/files/react-rn98a2/github/LimGeon/START_feedUP/main/image%205.png',
          time: '5월 12일(목) 오후 5시',
          name: '케이스별 4대보험 신고 마스터하기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '📌 4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            ' 📌 4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '📌 4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
        {
          tag: '기획',
          img: {'https://stackblitz.com/files/react-rn98a2/github/LimGeon/START_feedUP/main/image%205.png'},
          time: '4월 28일(목) 오후 7시',
          name: '상시 학습이 일어나는 학습 조직 만들기',
          which: [
            '스타트업에서 만난 살아 숨쉬는 학습조직 - 박세헌 | 언픽셀 경영지원총괄 & 기업전략실',
            '카훗과 함께 멋진 학습 조직 만들기 - 제임스 미클웨이트 | Kahoot! at work 부사장',
            '상시 학습이 일어나는 조직을 만들 때 피해야 할 3가지 실수 - 이채린 | 클라썸 CEO',
            '질의응답',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대포님',
            '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀',
            '4대보험 신고부터 모든 HR업무를 나홀로 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
      ],
    },
  ]);
  useEffect(() => {
    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < user[i].data.length; j++) {
        if (!tagList.includes(user[i].data[j])) {
          setTagList([...tagList, user[i].data[j].tag]);
          console.log(user[i].data[j].tag);
        }
      }
    }
  }, [user]);
  console.log(selectedTag);
  return (
    <div className="App">
      <header className="Header">
        <div className="Logo">
          <a href="#">
            <img className="LLogo" src={Logo} alt="Logo" />
          </a>
        </div>
        <ul className="Bar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Open Chat</a>
          </li>
          <li>
            <a href="#">Content</a>
          </li>
          <li>
            <a href="#">Bookings</a>
          </li>
        </ul>
      </header>
      <nav className="Nav">
        <div className="Nav_write">
          <img src={bookImg} alt="bookImg" />
          <div className="writing">태그로 원하는 웨비나를 찾을 수 있어요.</div>
        </div>
        <Tags tagList={tagList} selectedTag={selectedTag} getTag={getTag} />
      </nav>
      <main className="Main">
        <div className="Main_write">
          <img src={earthImg} alt="EarthImg" />
          <div className="writing">
            당신의 커리어리를 향상시켜줄 웨비나 리스트에요.
          </div>
        </div>
        <Posts selectedTag={selectedTag} user={user}></Posts>
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}
