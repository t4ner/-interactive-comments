import React, { useState } from "react";

function NewCommnetEditor({ isReply = false, image, onClick }) {
  const [comment, newComment] = useState("");
  const handleCommentChange = (e) => {
    newComment(e.target.value);
  };
  const handleClick = () => {
    onClick(comment);
    newComment("");
  };
  return (
    <div className="bg-white flex  items-start gap-4 rounded-lg p-4  ">
      <div>
        <img className="w-9 h-9 object-cover rounded-full" src={image} />
      </div>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment.."
        rows={3}
        className="border placeholder-indigo-400 border-gray-400 flex-1 p-3 rounded-md text-sm"
      />
      <button
        onClick={handleClick}
        className="bg-purple-600 py-1 text-sm px-3 rounded uppercase text-white"
      >
        {isReply ? "Reply" : "Send"}
      </button>
    </div>
  );
}

export default NewCommnetEditor;
