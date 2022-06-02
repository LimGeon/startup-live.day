import React, { useEffect, useState } from 'react';
import './App.css';
import './root.css';
import './Tag.css';
import './Post.css';
import checkImg from './Img/check.svg';

let num = 0;
function Tag({ name, onChange }) {
  const [active, setActive] = useState(false);
  const toggleActive = (event) => {
    setActive((current) => !current);
  };

  useEffect(() => {
    toggleActive;
  }, []);

  return (
    <button
      className={active ? 'BtnClicked Btn' : 'Btn'}
      onClick={(event) => {
        //onChange(event.target.innerText);
        toggleActive();
        console.log(name, active);
      }}
    >
      <img
        className={active ? 'CheckImgBlock' : 'CheckImgNone'}
        src={checkImg}
      />
      <div className={active ? 'BtnText' : null}>{name}</div>
    </button>
  );
}
function Tags({ tagList, selectedTag, getTag }) {
  let tl = [];
  tl.push(
    <Tag
      key={num++}
      name={'전체보기'}
      onChange={() => {
        getTag('');
      }}
    />
  );
  for (let i = 0; i < tagList.length; i++) {
    {
      tl.push(
        <Tag
          key={num++}
          name={tagList[i]}
          onChange={(_tag) => {
            selectedTag.includes(_tag)
              ? getTag(selectedTag.filter((tag) => tag !== _tag))
              : getTag([...selectedTag, _tag]);
          }}
        />
      );
    }
  }
  return <div className="Tags">{tl}</div>;
}

export default Tags;
