import React from "react";
import { useComment } from "../useComment";

function Reactions() {
  const {
    comment: { score },
    onPositiveReaction,
    onNegativeReaction,
  } = useComment();
  return (
    <div className="flex flex-col justify-center bg-gray-200 rounded-md">
      <button onClick={onPositiveReaction} className="reactions-btn">
        <img src="./images/icon-plus.svg" />
      </button>
      <p className="reactions-btn">{score}</p>
      <button onClick={onNegativeReaction} className="reactions-btn">
        <img src="./images/icon-minus.svg" />
      </button>
    </div>
  );
}

export default Reactions;
