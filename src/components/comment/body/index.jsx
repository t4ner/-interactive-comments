import React, { useState } from "react";
import { useComment } from "../useComment";

function Body() {
  const {
    onUpdate,
    isEditing,
    comment: { content, replyingTo },
  } = useComment();
  const [comment, setComment] = useState(content);
  const handleUpdate = () => {
    onUpdate(comment);
  };
  return (
    <div className="text-gray-600">
      {isEditing ? (
        <>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full mt-2 p-3 text-sm border border-gray-400 rounded-md"
          />
          <button
            onClick={handleUpdate}
            className="flex bg-purple-600 py-1 px-3 text-sm rounded uppercase ml-auto text-white"
          >
            Update
          </button>
        </>
      ) : (
        <p className="text-sm mt-2">
          <span className="text-blue-600 font-medium">
            {replyingTo ? `@${replyingTo} ` : ""}
          </span>
          {content}
        </p>
      )}
    </div>
  );
}

export default Body;
