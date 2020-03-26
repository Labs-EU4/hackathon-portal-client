import React, { useState } from "react";
import "../../assets/styles/atoms/TagsInput.css";

import Icon from '../atoms/Button';

const InputTag = props => {
  let tagInput;
  const [tags, setTags] = useState(props.tags);

  const removeTag = i => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const inputKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
    const val = e.target.value;
    if (e.keyCode === 13 && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);

      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  window.localStorage.setItem("tags", JSON.stringify(tags));

  return (
    <div {...props} className="input-tag">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li className="tag-name" key={tag}>
            {tag}
            <button
              type="button"
              className="del-btn"
              onClick={() => {
                removeTag(i);
              }}
            > - </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input
            type="text"
            onKeyDown={inputKeyDown}
            maxLength="20"
            ref={c => {
              tagInput = c;
            }}
          />
        </li>
      </ul>
    </div>
  );
};
export default InputTag;
