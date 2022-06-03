import React, { useEffect, useState } from 'react';
import './App.css';
import './root.css';
import './Tag.css';
import './Post.css';
import checkImg from './Img/check.svg';

let num = 0;
function Tag({ name, onChange, active }) {
  return (
    <button
      className={active ? 'BtnClicked Btn' : 'Btn NoClicked'}
      onClick={(event) => {
        onChange(event.target.innerText);
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
  let lengthOfselectedTag = selectedTag.length;
  tl.push(
    <Tag
      key={num++}
      name={'전체보기'}
      active={lengthOfselectedTag == 0 ? true : false}
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
          active={
            lengthOfselectedTag == 0 ? false : selectedTag.includes(tagList[i])
          }
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
