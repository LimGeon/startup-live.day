import React, { useEffect, useState } from 'react';
import './styles.css';
import './App.css';
import Tags from './Tag.js';

function Posts({ data, selectedTag }) {
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

export default function App() {
  const [tagList, setTagList] = useState(['dog', 'cat']);
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

  console.log(selectedTag);
  return (
    <div className="App">
      <header id="Header">Header</header>
      <main id="Main">
        <nav id="Nav">
          <Tags tagList={tagList} selectedTag={selectedTag} getTag={getTag} />
        </nav>
        <article id="Article">
          <Posts data={data} selectedTag={selectedTag}></Posts>
        </article>
        <footer id="Footer">Footer</footer>
      </main>
      <aside id="Side_left">left</aside>
      <aside id="Side_right">right</aside>
    </div>
  );
}
