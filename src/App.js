import React, { useEffect, useState } from 'react';
import './root.css';
import './App.css';
import './Tag.css';
import './Post.css';
import './Header.css';
import Posts from './Post.js';
import Tags from './Tag.js';
import Header from './Header.js';
import User from './User.js';
import bookImg from './Img/bookImg.svg';
import earthImg from './Img/Earth.svg';
import Logo from './Img/logo.svg';
//import myPost from './Img/me.jpg';

export default function App() {
  const [tagList, setTagList] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const getTag = (selectedTag) => {
    setSelectedTag(selectedTag);
  };

  const [user, setUser] = useState([
    {
      //img: ,
      name: 'Ho & Gun',
      data: [
        {
          tag: '웨비나',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205.png',
          time: '7월 16일 오후 7시',
          name: '사이트 이용방법에 대한 강의',
          which: [
            '사이트 이용하는법',
            '등록, 신청 하는법',
            '앞으로의 계획',
            '질의응답',
          ],
          forWho: [
            '웨비나를 보고싶은데 어디서 누가 하는지 알 수 없었던 분',
            '웨비나를 하고 싶은데 홍보가 안돼서 고민이셨던 분',
            '웨비나를 신청했는데 언제 하는지 까먹을까 걱정이신 분',
          ],
        },
        {
          tag: '보험',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205%20(1).png',
          time: '5월 12일(목) 오후 5시',
          name: '케이스별 4대보험 신고 마스터하기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            '4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
      ],
    },
    {
      img: 'https://stackblitz.com/files/react-paf8v5/github/LimGeon/START_feedUP/main/src/Img/image%206.png',
      name: 'flex',
      data: [
        {
          tag: '보험',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205%20(1).png',
          time: '5월 12일(목) 오후 5시',
          name: '케이스별 4대보험 신고 마스터하기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            ' 4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
        {
          tag: '기획',
          img: 'https://stackblitz.com/files/react-ozwjkw/github/LimGeon/START_feedUP/main/src/Img/image%205.png',
          time: '4월 28일(목) 오후 7시',
          name: '상시 학습이 일어나는 학습 조직 만들기',
          which: [
            ' 4대보험 신고, 너무 어려워요!',
            ' 수많은 급여 담당자님들! 4대보험 신고, 어떻게 하고는 있는데 너무 어렵지 않으세요? 혹시 어디서부터 시작해야 할지 막막한가요? 플렉스 페이롤 파트너스팀의 급여 전문가에게 초보자도 따라 할 수 있을 만큼 쉽고 빠르게 4대보험 신고를 배워보세요!',
          ],
          forWho: [
            '4대보험 신고를 해야 하는데 어떻게 시작해야 할지 모르겠는 HR 담당자/대표님',
            ' 4대보험을 담당하고 있지만 케이스별로 디테일을 챙기기 어려운 인사팀 ',
            '4대보험 신고부터 모든 HR업무를 ‘나홀로’ 하느라 효율적인 방법을 찾고 있는 대표',
          ],
        },
      ],
    },
  ]);
  for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < user[i].data.length; j++) {
      if (!tagList.includes(user[i].data[j].tag)) {
        setTagList([...tagList, user[i].data[j].tag]);
      }
    }
  }

  console.log(selectedTag);
  return (
    <div className="App">
      <header className="Header">
        <Header />
      </header>
      <div className="Non-header">
        <nav className="Nav">
          <div className="Nav_write">
            <img src={bookImg} alt="bookImg" />
            <div className="writing">
              태그로 원하는 웨비나를 찾을 수 있어요.
            </div>
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
        <footer className="Footer">
          <div className="footCard">
            <div className="footHeader">
              <div className="cardHead">
                요즘 스타트업 일을 하면서 궁금하거나 고민되는 부분이 있나요?
              </div>
              <div className="cardText">
                아래에 적어주시면 그 궁금증, 고민들을 해결해줄 수 있는
                스타트업을 찾아 웨비나를 열어드릴게요.
              </div>
            </div>
            <div className="footMain">
              <input
                type="text"
                className="footMainText"
                placeholder="ex) 어떻게하면 사용자 데이터 분석 잘하는 PM이 될 수 있을지 고민입니다. 경험을 공유받고 싶어요"
              />
              <div className="footBtn">
                <button className="footBtn1" onClick={(event) => {}}>
                  <div className="footBtn2">스타트업 사람들에게 쏘아올리기</div>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
