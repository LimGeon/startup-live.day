import React, { useEffect, useState } from 'react';
import './styles.css';
/* import './App.css'; */

function Img({ animal, type, jpg }) {
  if (type == 'All') {
    return (
      <img
        src={jpg}
        alt="dog1"
        width="100px"
        height="100px"
        align="center"
        border="0"
        /* className="postui" */
      />
    );
  } else if (type == 'dog') {
    if (animal == 'dog') {
      return (
        <img
          src={jpg}
          alt="dog1"
          width="100px"
          height="100px"
          align="center"
          border="0"
          /* className="postui" */
        />
      );
    }
  } else if (type == 'cat') {
    if (animal == 'cat') {
      return (
        <img
          src={jpg}
          alt="dog1"
          width="100px"
          height="100px"
          align="center"
          border="0"
          /* className="postui" */
        />
      );
    }
  }
}

export default function App() {
  const [type, setType] = React.useState('All');
  const selectAll = () => {
    setType('All');
  };
  const selectDog = () => {
    setType('dog');
  };

  return (
    <div className="App">
      <header id="Header">Header</header>
      <main id="Main">
        <nav id="Nav">
          <button onClick={selectAll}>전체</button>
          <button onClick={selectDog}>개</button>
          <button
            onClick={() => {
              setType('cat');
            }}
          >
            고양이
          </button>
        </nav>

        <article id="Article">
          <Img
            animal="dog"
            type={type}
            jpg="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220417_258%2F1650184513321BoHu1_JPEG%2F51320293024461210_729841342.jpg&type=sc960_832"
          />
          <Img
            animal="dog"
            type={type}
            jpg="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211127_207%2F1637987015405Y9waP_JPEG%2F39122904114070858_937714696.jpg&type=sc960_832"
          />
          <Img
            animal="cat"
            type={type}
            jpg="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTVfMjEg%2FMDAxNjQ5OTkwOTM0NTk0.CRZs-E8NkFymigUo2TENVAlt8C987RD9DoGdTxP9zakg.Fe8dPkYpB0ia5p-du3IMFIwcLxTP8KYvWSqndpDrI3Yg.JPEG.wownd3007%2F20220415_113455.jpg&type=sc960_832"
          />
        </article>
        <footer id="Footer">Footer</footer>
      </main>
      <aside id="Side_left">left</aside>
      <aside id="Side_right">right</aside>
    </div>
  );
}
