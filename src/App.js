import React, { useEffect, useState } from 'react';
import './root.css';
import './App.css';
import './Tag.css';
import Posts from './Post.js';
import Tags from './Tag.js';

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
      name: '빡빡이',
      field: '개발자',
    },
    {
      img: 'https://lh3.google.com/p/AF1QipPeBgHu1e5jNhd-trvC8OY7xKG4_6YdZ7LIafbf=s124-c-U',
      name: '장발',
      field: '개발자',
    },
  ]);

  console.log(selectedTag);
  return (
    <div className="App">
      <header id="Header"></header>
      <main id="Main">
        <nav id="Nav">
          <Tags tagList={tagList} selectedTag={selectedTag} getTag={getTag} />
        </nav>
        <article id="Article">
          <Posts data={data} selectedTag={selectedTag} user={user}></Posts>
        </article>
        <footer id="Footer">Footer</footer>
      </main>
      <aside id="Side_left">left</aside>
      <aside id="Side_right">right</aside>
    </div>
  );
}
